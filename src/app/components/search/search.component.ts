import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { NewsService } from 'src/app/services/news.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  defaultImg: string = "../../assets/1200px-No-Image-Placeholder.svg.png"
  articles: Array<any> = []
  myLocSub!: Subscription
  mysub!: Subscription;
  searchSub!: Subscription
  loc: string
  searchName=this._activatedroute.snapshot.paramMap.get("searchName")
  constructor(private ns: NewsService, private _title: Title, private shs: ShareDataService, private router: Router, private ls: LocationService,private _activatedroute:ActivatedRoute) {

  }
  getdata(loc: string) {
    this.mysub = this.ns.getnews("business").subscribe(
      result => {
        this.articles = result.articles
      },
      error => {
        console.log(error)
      }
    )
  }
  showArticle(id: number) {
    this.shs.setData(this.articles[id])
    this.router.navigate(['/article', id])
  }
  search(q: any) {
    if (q == "") {
      this.myLocSub = this.ls.getLocation().subscribe(
        res => {
          this.loc = res.countryCode.toLowerCase()
          this.getdata(this.loc)
        },
        error => {
          console.log(error)
        }
      )
    }
    this.searchSub = this.ns.search(q).subscribe(result => {
      this.articles = result.articles

      console.log(q)
    },
      error => {
        console.log(error)
      })
  }
  ngOnInit(): void {
    this.search(this.searchName)
  }

}
