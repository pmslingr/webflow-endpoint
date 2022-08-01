package io.slingr.endpoints.webflow;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.configurations.EndpointProperties;
// import io.slingr.endpoints.configurations.Properties;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * Webflow endpoint
 * <p/>
 * Created by pmorales on 11/07/22.
 */
@SlingrEndpoint(name = "webflow", functionPrefix = "_")
public class WebflowEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(WebflowEndpoint.class);
    private static final String WEBFLOW_API = "https://api.webflow.com";
    
    @EndpointDataStore(name = TokenManager.DATA_STORE)
    private DataStore tokensDataStore;

    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String clientSecret;

    @EndpointProperty
    private String authorizationCode;

    private String accessToken;
   
    @ApplicationLogger
    private AppLogs appLogger;

    @Override
    public String getApiUri() {
        return WEBFLOW_API;
    }


    private TokenManager tokenManager;    

    @Override
    public void endpointStarted() {
        EndpointProperties properties =  properties();
        String redirectUri = "https://"+properties.getApplicationName()+"."+properties.getBaseDomain() + "/callback";
        appLogger.info("Redirect uri: " + redirectUri);
        try {
            appLogger.info("Setting token on endpoint start");
            this.tokenManager = new TokenManager(httpService(), tokensDataStore, clientId, clientSecret, authorizationCode, redirectUri);
            appLogger.info("Token succefully set up on endpoint start");
        } catch (Exception e) {
            appLogger.error(String.format("Error getting token for client ID [%s]. Refresh authorization code and redeploy the endpoint.", clientId),e);
            appLogger.error(e.getMessage());
            throw e;
        }
    }

    @EndpointWebService(path = "/")
    public String webhooks(WebServiceRequest request) {
        final Json json = HttpService.defaultWebhookConverter(request);
        events().send(HttpService.WEBHOOK_EVENT, json);
        return "ok";
    }
    
    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        try {
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        try {
            return defaultPutRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        try {
            return defaultPatchRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        try {
            return defaultDeleteRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }
}