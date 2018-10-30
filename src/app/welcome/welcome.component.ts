import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: string;
  pass: string;

  constructor(protected userService: UserService) { }

  ngOnInit() {
  }
}
