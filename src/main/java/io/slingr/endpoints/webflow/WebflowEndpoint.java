package io.slingr.endpoints.webflow;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.configurations.EndpointProperties;
// import io.slingr.endpoints.configurations.Properties;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
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
    
    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String clientSecret;

    @EndpointProperty
    private String authorizationCode;

    @EndpointProperty
    private String accessToken;

    @ApplicationLogger
    private AppLogs appLogger;

    @Override
    public String getApiUri() {
        return WEBFLOW_API;
    }

    @Override
    public void endpointStarted() {
        EndpointProperties properties =  properties();
        String redirectUri = "https://"+properties.getApplicationName()+"."+properties.getBaseDomain() + "/callback";
        appLogger.info("Redirect uri: " + redirectUri);
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
            setRequestHeaders(request);
            return defaultGetRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultPostRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultPutRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultPatchRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        try {
            setRequestHeaders(request);
            return defaultDeleteRequest(request);
        } catch (EndpointException restException) {
            throw restException;
        }
    }

    private void setRequestHeaders(FunctionRequest request) {
        Json body = request.getJsonParams();
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Authorization", "Bearer " + accessToken);
        body.set("headers", headers);
    }
}