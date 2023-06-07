import {Injectable} from "@angular/core";
import {KeycloakProfile} from "keycloak-js";
import {KeycloakEventType, KeycloakService} from "keycloak-angular";



@Injectable({providedIn : "root"})
export class SecurityService {
  public profile? : KeycloakProfile;
  constructor (public kcService: KeycloakService) {
    this.init();
  }
  init(){
    this.kcService.keycloakEvents$.subscribe({
      next: (e) => {
        if (e.type == KeycloakEventType.OnAuthSuccess) {
          this.kcService.loadUserProfile().then(profile=>{
            this.profile=profile;
          });
        }
      }
    });
  }
  public hasRoleIn(roles:string[]):boolean
  {
    let userRoles = this.kcService.getUserRoles();
    for(let role of roles){
      if (userRoles.includes(role)) return true;
    } return false;
  }
  public getRole() : string
  {
    let role = this.kcService.getUserRoles();
    return role[5];
  }

  disconnect()
  {
    this.kcService.logout(window.location.origin).then((success) => {
      console.log("--> log: logout success ", success );
    }).catch((error) => {
      console.log("--> log: logout error ", error );
    });
  }

  async connect()
  {
    await this.kcService.login({
      redirectUri : window.location.origin
    }).then((success)=>{
      console.log("login success,success");
    }).catch((error)=>{
      console.log("login error ",error);
    })

  }
}
