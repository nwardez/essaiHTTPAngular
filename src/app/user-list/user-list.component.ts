import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Iuser } from '../iuser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private api: ApiService, private route:ActivatedRoute) { }  // Le activateRoute sert a cibler le routeur en action

  users : Iuser[] = [];
  id:string;

  ngOnInit() {
    
    this.api.getUsers().subscribe( (data: Iuser[])=> {
      this.users = data;
    });
  }

}
