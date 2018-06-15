import { Injectable } from '@angular/core';
import { HttpService } from '../../@core/data/http-client';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {
  
  constructor(private http: HttpService,private GlobalService : GlobalService) {}

    getStudents():Observable<Students[]> {
        return this.http
            .get( GlobalService.serverApi +'students/?format=json')
            .map(res => res as Students[] || []);
    }

    addStudents(data){
        return this.http
            .post( GlobalService.serverApi +'students/', data)
            .map(res => res);
    }

    addPhoto(data){
        return this.http
            .post( GlobalService.server +'upload/', data)
            .map(res => res);
    }
    getClasses():Observable<Classes[]> {
        return this.http
            .get( GlobalService.serverApi +'classes/?format=json')
            .map(res => res as Classes[] || []);
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

interface Students {
    id : string,
    first_name : string,
    last_name : string,
    username : string,
    email : string,
    student_class : string
  }
  interface Classes {
    id : string,
    name : string,
  }