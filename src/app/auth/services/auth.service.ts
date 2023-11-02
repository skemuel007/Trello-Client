import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, filter, map } from "rxjs";
import { CurrentUserInteface } from "../types/currentUser.interface";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { LoginRequestInterface } from "../types/loginRequest.interface";
import configUrl from '../../../assets/config/config.json';

@Injectable()
export class AuthService {

    config = {
        baseUrl: configUrl.apiServer.baseUrl
    }

    currentUser$ = new BehaviorSubject<CurrentUserInteface | null | undefined>(
        undefined
    );

    isLoggedIn$ = this.currentUser$.pipe(filter((currentUser) => currentUser != undefined),
    map((currentUser) => Boolean(currentUser)));

    constructor(private http: HttpClient) {}

    getCurrenctUser(): Observable<CurrentUserInteface> {
        const url = `${this.config.baseUrl}/user`;
        return this.http.get<CurrentUserInteface>(url);
    }

    setCurrentUser(currentUser: CurrentUserInteface | null): void {
        this.currentUser$.next(currentUser);
    }

    setToken(currentUser: CurrentUserInteface): void {
        localStorage.setItem('token', currentUser.token);
    }

    register(registerRequest: RegisterRequestInterface) : Observable<CurrentUserInteface> {
        const url = this.config.baseUrl + '/users';
        console.log('Service', registerRequest);
        return this.http.post<CurrentUserInteface>(url, registerRequest);
    }

    login(loginRequest: LoginRequestInterface) : Observable<CurrentUserInteface> {
        const url = this.config.baseUrl + '/user/login';
        console.log('Service', loginRequest);
        return this.http.post<CurrentUserInteface>(url, loginRequest);
    }

    logout(): void {
        localStorage.removeItem('token');
        this.currentUser$.next(null);
    }
}