import { Component, OnInit } from '@angular/core';
import { StreamListComponent } from '../stream-list/stream-list.component';
import { AuthService } from "../../../core/auth.service";
import { log } from 'util';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css']
})
export class DashboardMainComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {  
    document.body.classList.add('bg-secondary'); 
  }

}
