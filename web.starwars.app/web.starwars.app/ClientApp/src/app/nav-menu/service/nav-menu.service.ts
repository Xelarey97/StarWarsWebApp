import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class NavMenuService {
  constructor(private http: Http) { }

  getMenuItems(): Observable<any> {
    return this.http.get('api/MenuItems/GetItems').pipe(map((response: Response) => {
      var respon = response.json();
      return respon;
    }));
  }
}
