package edu.ucsb.changeme.controllers;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import edu.ucsb.changeme.services.Auth0Service;
import edu.ucsb.changeme.models.GoogleUserProfile;

@RestController
public class AppController {
  @Value("${security.oauth2.resource.id}")
  private String resourceId;

  @Value("${auth0.domain}")
  private String domain;

  @Value("${auth0.clientId}")
  private String clientId;

  @Autowired
  private Auth0Service auth0Service;

  @GetMapping(value = "/api/public", produces = "application/json")
  public String publicEndpoint() {
    return new JSONObject().put("message", "This is a public endpoint.").toString();
  }

  @GetMapping(value = "/api/private", produces = "application/json")
  public GoogleUserProfile privateEndpoint(@RequestHeader("Authorization") String authorization)
      throws Exception {
    GoogleUserProfile profile = auth0Service.getInfoFromAuthorization(authorization);
    return profile;
  }
}
