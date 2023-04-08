import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CurrentUserInteface } from "../types/currentUser.interface";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { RegisterRequestInterface } from "../types/registerRequest.interface";

@Injectable()
export class AuthService {

    currentUser$ = new BehaviorSubject<CurrentUserInteface | null | undefined>(
        undefined
    );
    constructor(private http: HttpClient) {}

    getCurrenctUser(): Observable<CurrentUserInteface> {
        const url = `${environment.baseUrl}/user`;
        return this.http.get<CurrentUserInteface>(url);
    }

    setCurrentUser(currentUser: CurrentUserInteface | null): void {
        this.currentUser$.next(currentUser);
    }

    setToken(currentUser: CurrentUserInteface): void {
        localStorage.setItem('token', currentUser.token);
    }

    register(registerRequest: RegisterRequestInterface) : Observable<CurrentUserInteface> {
        const url = environment.baseUrl + '/users';
        console.log('Service', registerRequest);
        return this.http.post<CurrentUserInteface>(url, registerRequest);
    }
}