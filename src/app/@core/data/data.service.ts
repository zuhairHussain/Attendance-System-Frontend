import { Injectable } from '@angular/core';
import { HttpService } from '../../@core/data/http-client';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
  
  constructor(private http: HttpService,private GlobalService : GlobalService) {}

    getStudents() {
        return this.http
            .get( GlobalService.serverApi +'students/?format=json')
            .map(data => {
                console.log(data)
                return data;
            })
    }

    login(data) {
        return this.http
            .post( GlobalService.serverApi +'token/?format=json', data)
            .map(data => {
                return data;
            });
    }

    verifyToken(data) {
        return this.http
            .post( GlobalService.serverApi +'token/verify/?format=json', data)
            .map(data => {
                return data;
            });
    }
}