import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './welcome/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CobSession } from './category/cob-session';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Api-Version': '1.1',
    'Cobrand-Name': 'restServer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://developer.api.yodlee.com/ysl';
  private session;

  constructor(private http: HttpClient) { }

  loginCob(): Observable<CobSession> {
    const cobrand = {
      'cobrand': {
        'cobrandLogin': 'sbCobd3e42debf324ae6b7b5b347bd44737978a',
        'cobrandPassword': 'b4095e04-b62b-420a-ad78-9dd255fece25',
        'locale': 'en_US'
      }
    };
    return this.http.post<CobSession>(this.baseUrl + '/cobrand/login', cobrand, httpOptions);
  }

  login(): Observable<IUser> {
    this.loginCob().subscribe(response => { this.session = response.session.cobSession; });
    const httpOpt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Api-Version': '1.1',
        'Cobrand-Name': 'restServer',
        'Authorization': 'cobSession=' + this.session
      })
    };
    return this.http.post<IUser>(this.baseUrl + '/user/login', null, httpOpt);
  }
}
