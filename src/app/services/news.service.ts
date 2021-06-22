import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url=`https://newsapi.org/v2/top-headlines?country=eg&apiKey=0b2bfa9a76de492d998f7e8c58da1122`
  businessUrl=`https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=0b2bfa9a76de492d998f7e8c58da1122`
  getHead(loc:string):Observable<any>{
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${loc}&apiKey=0b2bfa9a76de492d998f7e8c58da1122`)
  }
  getnews(category:string):Observable<any>{
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=0b2bfa9a76de492d998f7e8c58da1122`)

  }
  search(q:any):Observable<any>{
    return this.http.get(`https://newsapi.org/v2/everything?qInTitle=${q}&apiKey=0b2bfa9a76de492d998f7e8c58da1122`)
  }
  getSources():Observable<any>{
    return this.http.get(`https://newsapi.org/v2/sources?apiKey=0b2bfa9a76de492d998f7e8c58da1122`)
  }
  filterBySources(source:string|null):Observable<any>{
    return this.http.get(`https://newsapi.org/v2/everything?sources=${source}&apiKey=0b2bfa9a76de492d998f7e8c58da1122`)
  }
  // filterByDate(from:any,to:any):Observable<any>{
  //   return this.http.get(`https://newsapi.org/v2/everything?from=${from}&to=${to}&sortBy=popularity&apiKey=0b2bfa9a76de492d998f7e8c58da1122`)
  // }
  constructor( private http:HttpClient ) { }
}
