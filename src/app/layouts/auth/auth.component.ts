import { Component, OnInit } from '@angular/core';
import {Field} from '../../blocks/form/form.component';
import {AccountFacade} from '../../facades/account.facade';

export interface AuthData {
  login: string;
  password: string;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  fieldset: Field[] = [
    {type: 'text', label: 'Email или номер телефона', name: 'login'},
    {type: 'password', label: 'Пароль', name: 'password'}
  ];

  constructor(private accountFacade: AccountFacade) { }

  ngOnInit(): void {
  }

  onFormSubmit(data: AuthData) {
    this.accountFacade.auth(data).subscribe(status => { if (status.success) { this.onAuthSuccess(); } } );
  }

  onAuthSuccess() {

  }

}
