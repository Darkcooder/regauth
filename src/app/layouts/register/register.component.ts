import { Component, OnInit } from '@angular/core';
import {Field} from '../../blocks/form/form.component';
import {AccountFacade} from '../../facades/account.facade';

export interface RegisterData {
  name: string;
  nickname: string;
  email: string;
  phone: string;
  password: string;
  personalDataProcessingAgree: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fieldset: Field[] = [
    {type: 'text', label: 'Имя', name: 'name'},
    {type: 'text', label: 'Никнейм', name: 'nickname'},
    {type: 'text', label: 'Email', name: 'email'},
    {type: 'text', label: 'Телефон', name: 'phone'},
    {type: 'password', label: 'Пароль', name: 'password'},
    {type: 'checkbox', label: 'Я даю свое согласие на обработку персональных данных', name: 'personalDataProcessingAgree'}
  ];

  constructor(private accountFacade: AccountFacade) { }

  ngOnInit(): void {
  }

  onFormSubmit(data: RegisterData) {
    this.accountFacade.register(data).subscribe(status => {if (status.success) { this.onRegisterSuccess(); } });
  }

  onRegisterSuccess() {

  }

}
