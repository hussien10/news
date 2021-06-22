import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
data:any=localStorage.getItem("data")
setData(data:any){
  this.data=data
  this.saveData(data)
}
getData(){
  console.log(this.data)
  return this.data
}
saveData(data:any){
  localStorage.setItem("data",data)
}
  constructor() { }
}
