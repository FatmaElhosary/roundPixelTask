import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  sharedUserName:any=localStorage.getItem('name') ;
  constructor() { }
}
