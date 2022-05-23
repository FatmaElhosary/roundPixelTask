import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private _SharedDataService:SharedDataService) { }
    name:string=this._SharedDataService.sharedUserName;
    //name:any=localStorage.getItem('name');
  ngOnInit(): void {
  }

}
