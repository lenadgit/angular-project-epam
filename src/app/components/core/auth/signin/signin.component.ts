import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../../services/auth/authservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	//loginForm: FormGroup;
	loginForm: string;
	logout: []; // what the type of data should be here
	isAuthenticated: boolean;
	//getUserInfo: loginForm; // should return user login. Is it correct value?

  constructor(private _authserviceService: AuthserviceService) { }

  ngOnInit() {

  }

}
