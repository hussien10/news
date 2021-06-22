import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  loc:any
  getLocation():Observable<any>{
    return this.http.get("https://extreme-ip-lookup.com/json/")
  }
//   mysub=this.getLocation().subscribe(
//     res=> {
//       this.loc=res.countryCode.toLowerCase()
// }
//     )

  constructor( private http:HttpClient) {

  }
}
