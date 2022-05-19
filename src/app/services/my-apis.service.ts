import { Countries } from './../interfaces/countries';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/* use those apis to get user geolocations and nationality all apis accept get request
https://backofficeapi.online-tkt.com/api/GetAllCountriesByLangName?LangCode=en
returns all countries with country codes
*********
https://api.ipify.org/?format=json
returns users ip adress
*********
use ip adress to get user geo location and country
https://ipapi.co/${ip-adress}/json/
*/

@Injectable({
  providedIn: 'root',
})
export class MyApisService {
  constructor(private _http: HttpClient) {}
  //get nationalities
  getAllCountries(): Observable<any> {
    return this._http.get(
      'https://backofficeapi.online-tkt.com/api/GetAllCountriesByLangName?LangCode=en'
    );
  }
  //get user ip
  getUserIp(): Observable<any> {
    return this._http.get('https://api.ipify.org/?format=json');
  }
  //get geolocation
  getGeoLocation(ipadress: any): Observable<any> {
    return this._http.get(`https://ipapi.co/${ipadress}/json/`);
  }
}
