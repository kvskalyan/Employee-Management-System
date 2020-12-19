import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class DataVerification {
  verifyName(name: String): boolean {
    if (name == null) {
      return false;
    }
    if (name.length < 3) {
      return false;
    }
    for (let i: number = 0; i < name.length; i++) {
      let c = name.charAt(i);
      if (!(c >= "A" && c <= "Z") && !(c >= "a" && c <= "z")) {
        return false;
      }
    }
    return true;
  }
  verifyEmail(email: String): boolean {
    if (email == null) {
      return false;
    }
    if (email.length < 3) {
      return false;
    }
    for (let i: number = 0; i < email.length; i++) {
      let c = email.charAt(i);
      if (c == "@" && email.substring(email.length-4)==".com") {
        return true;
      }
    }
    return false;
  }
  verifyMobile(mobile: String): boolean {
    if (mobile == null) {
      return false;
    }
    if (mobile.length < 10 || mobile.length > 10) {
      return false;
    }
    for (let i: number = 0; i < mobile.length; i++) {
      let c = mobile.charAt(i);
      if (c >= "0" && c <= "9") {
        return true;
      }
    }
    return false;
  }
}
