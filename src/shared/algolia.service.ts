import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AlgoliaService {
   url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
  constructor(private Http:HttpClient) { }

  getData(): Observable<any>{
   return this.Http.get(this.url);
  }
}
