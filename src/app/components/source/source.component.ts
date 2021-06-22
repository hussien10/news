import {  Subscription } from 'rxjs';
import { ShareDataService } from './../../services/share-data.service';
import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {
  sourceName:string|null;
  news:Array<any>
  defaultImg: string = "../../assets/1200px-No-Image-Placeholder.svg.png"
  searchSub:Subscription
  sourceSub:Subscription
  constructor(private _ActivatedRoute:ActivatedRoute,private _newsService:NewsService,private _router:Router,private _shareData:ShareDataService) { }
  showArticle(id:number){
    this._shareData.setData(this.news[id])
    this._router.navigate(['/article',id])
  }
  search(q:string){
    this.searchSub=this._newsService.search(q).subscribe(result=>{
      this.news=result.articles
    },
    error=>{
      console.log(error)
    })
  }

  ngOnInit(): void {

    this.sourceName = this._ActivatedRoute.snapshot.paramMap.get("sourceName")
    this.sourceSub=this._newsService.filterBySources(this.sourceName).subscribe(result=>{
      this.news=result.articles
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.sourceSub.unsubscribe()
  }

}
