import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { Response, Event } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private baseUrl = 'https://gateway.marvel.com/v1/public/comics';
  private apiKey = 'a4632827280b792c0c41dd8cbf0b1134';
  private privateKey = '7d6d1cb0f1facbd1b881c257a5cc9ce1123b367e';

  constructor(private http: HttpClient) { }

  getMarvelList(): Observable<Response> {
    const timestamp = new Date().getTime().toString();
    const hash = Md5.hashStr(timestamp + this.privateKey + this.apiKey);

    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('ts', timestamp)
      .set('orderBy', '-onsaleDate')
      .set('dateRange','2023-01-01,2024-04-05')
      .set('noVariants','true')
      .set('formatType','comic')
      .set('hash', hash);

    return this.http.get<Response>(this.baseUrl, { params });
  }

  getNewsMarvelList(): Observable<Response> {
    const timestamp = new Date().getTime().toString();
    const hash = Md5.hashStr(timestamp + this.privateKey + this.apiKey);

    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('ts', timestamp)
      .set('orderBy', '-onsaleDate')
      .set('dateRange','2023-01-01,2024-04-05')
      .set('noVariants','true')
      .set('formatType','comic')
      .set('offset','20')
      .set('hash', hash);

    return this.http.get<Response>(this.baseUrl, { params });
  }
}
