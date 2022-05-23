import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  sharedUserName:string="" ;
  constructor() { }
}
