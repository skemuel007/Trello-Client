import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardInterface } from '../types/board.interface';
import { HttpClient } from '@angular/common/http';
import configUrl from '../../../assets/config/config.json';

@Injectable()
export class BoardsService {

  config = {
    baseUrl: configUrl.apiServer.baseUrl
  }

  constructor(private http: HttpClient) { }

  getBoards(): Observable<BoardInterface[]> {
    const url = this.config.baseUrl + '/boards';
    return this.http.get<BoardInterface[]>(url);
  }

  createBoard(title: string) : Observable<BoardInterface> {
    const url = this.config.baseUrl + '/board';
    return this.http.post<BoardInterface>(url, {title});
  }
}
