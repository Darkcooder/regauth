import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AuthData} from '../layouts/auth/auth.component';
import {RegisterData} from '../layouts/register/register.component';

export interface RegisterStatus {
  success: boolean;
  errorMessage?: string;
  userName?: string;
}

export interface AuthStatus {
  success: boolean;
  errorMessage?: string;
  userName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountFacade {

  public currentAuthStatus: BehaviorSubject<AuthStatus> = new BehaviorSubject<AuthStatus>(
    {success: false, errorMessage: 'Not auth'}
    );

  public auth(data: AuthData): BehaviorSubject<AuthStatus> {
    setInterval(() => this.currentAuthStatus.next({success: true, userName: data.login}), 500);
    return this.currentAuthStatus;
  }

  public register(data: RegisterData): BehaviorSubject<RegisterStatus> {
    const registerSubject = new BehaviorSubject<RegisterStatus>({success: false});
    setInterval(() => registerSubject.next({success: true, userName: data.name}), 500);
    return registerSubject;
  }
}
