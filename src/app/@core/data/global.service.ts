import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }

  public static serverApi = 'http://127.0.0.1:8000/api/';
  public static server = 'http://127.0.0.1:8000/';

}
