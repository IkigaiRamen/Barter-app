import { Component } from '@angular/core';
import { OAuthService, NullValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  userName: string | undefined;


  constructor(private oauthService: OAuthService) {
    this.configure();
    this.updateUserName();

  }
  
  authConfig: AuthConfig = {
    issuer: 'http://localhost:8100/auth/realms/GatewayApi',
    redirectUri: window.location.origin + "",
    clientId: 'MicroserviceAuth',
    scope: 'openid profile email offline_access',
    responseType: 'code',
    // at_hash is not present in JWT token
    disableAtHashCheck: true,
    showDebugInformation: true
  }
  
  public login() {
    this.oauthService.initLoginFlow();
  }
  
  public logoff() {
    this.oauthService.logOut();
  }
  
  private configure() {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new  NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
  private updateUserName() {
    const claims = this.oauthService.getIdentityClaims();
    this.userName = claims ? (claims as any).preferred_username : undefined;
    console.log(this.userName,"this is the username")
    console.log(claims,"this is the claims")
  }

  public isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}