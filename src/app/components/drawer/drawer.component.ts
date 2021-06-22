import { Router } from '@angular/router';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {
  visible = false;
  placement: NzDrawerPlacement = 'right';
  faFilter=faFilter;
  sources:Array<any>;
  // date = null;
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  date = null;
  dateFormat = 'yyyy-MM-dd'

  size: 'large' | 'small' | 'default' = 'default';
  // this to change date format to yyyy-mm-dd
//    formatDate(date:any) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2)
//         month = '0' + month;
//     if (day.length < 2)
//         day = '0' + day;

//     return [year, month, day].join('-');
// }
  // onChange(e:any) {
  //   let from=this.formatDate(e[0])
  //   let to=this.formatDate(e[1])
  //   this._router.navigate(['dateNews',from,to])
  // }
  constructor(private ns:NewsService,private _router:Router) {

  }
  // send source
  sendSource(source:string){
    this._router.navigate(["/source",source])
  }
  ngOnInit(): void {
    this.ns.getSources().subscribe(result=>{
      this.sources=result.sources
    })
  }

}
