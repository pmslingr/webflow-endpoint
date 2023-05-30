package io.slingr.endpoints.webflow;

import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.datastores.DataStoreResponse;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.utils.Json;
import javax.ws.rs.core.Form;

public class TokenManager {
    
    private static final String WEBFLOW_API_TOKEN_URL = "https://api.webflow.com/oauth/access_token";

    public static final String DATA_STORE = "tokens";
    private static final String LAST_TOKEN = "_LAST_TOKEN";
    private static final String ID = "_id";
    private static final String TIMESTAMP = "timestamp";
    private static final String ACCESS_TOKEN = "accessToken";
    private static final String AUTHORIZATION_CODE = "authorizationCode";

    private DataStore ds;
    private String clientId;
    private String clientSecret;
    private String authorizationCode;
    private String redirectUri;
    private String accessToken;
    private HttpService httpService;

    TokenManager(HttpService httpService, DataStore ds, String clientId, String clientSecret, String authorizationCode, String redirectUri) {

        this.httpService = httpService;
        this.ds = ds;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.authorizationCode = authorizationCode;
        this.redirectUri = redirectUri;
        this.setLastToken();
        this.setupToken();
    }

    public void setLastToken() {
        Json filter = Json.map();
        filter.set(AUTHORIZATION_CODE, this.authorizationCode);

        Json lastToken = this.getLastToken();
        DataStoreResponse dsResp = ds.find(filter);

        if (dsResp != null && dsResp.getItems().size() == 0 || lastToken == null || lastToken.string(ACCESS_TOKEN) == null) { 
            System.out.println("Getting token for first time");
            System.out.println("Code: " + this.authorizationCode);
            System.out.println("Redirect uri: " + this.redirectUri);
            Form formBody = new Form()
                    .param("client_id", this.clientId)
                    .param("client_secret", this.clientSecret)
                    .param("grant_type", "authorization_code")
                    .param("code", this.authorizationCode);
                    // .param("redirect_uri", this.redirectUri); if redirect_uri is sent, we get an auth error.
            Json tokenResponse = RestClient.builder(WEBFLOW_API_TOKEN_URL)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .post(formBody);
            this.accessToken = tokenResponse.string("access_token");
            System.out.println("Token succefully retrieved on endpoint start");
            System.out.println("retrieved accessToken " + tokenResponse.string("access_token"));

            Json newToken = Json.map();
            newToken.set(ACCESS_TOKEN, this.accessToken);
            newToken.set(AUTHORIZATION_CODE, this.authorizationCode);
            newToken.set(TIMESTAMP, System.currentTimeMillis());
            newToken.set(ID, LAST_TOKEN);
            this.ds.save(newToken);
        } else {
            this.accessToken = lastToken.string(ACCESS_TOKEN);
        }
    }

    public String getToken() {
        return this.accessToken;
    }

    public void setupToken() {
        System.out.println("SET UP TOKEN: "+ getToken());
        httpService.setupBearerAuthenticationHeader(getToken());
        httpService.setupDefaultHeader("Accept-Version", "1.0.0");
        httpService.setupDefaultHeader("content-type", "application/json");
    }

    private Json getLastToken() {
        try {
            return this.ds.findById(LAST_TOKEN);
        } catch (Exception ex) {
            return null;
        }
    }
}
