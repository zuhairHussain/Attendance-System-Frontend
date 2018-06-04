import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE1NDQ4OTE5OTQsInRva2VuX3R5cGUiOiJhY2Nlc3MiLCJqdGkiOiIyMzYwMTZiYzRiNTI0Y2Q4YTcxY2JhNzg3OWJlYWU0YSJ9.qbq1OXn5w2on35wA9DIbreP2hGcUnd-hHtfxu4ueU0g'); 
  }

  get(url) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url, data) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    });
  }

  delete(url) {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }
}
