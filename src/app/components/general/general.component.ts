import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import { NewsService } from 'src/app/services/news.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit, OnDestroy {
  defaultImg: string = "../../assets/1200px-No-Image-Placeholder.svg.png"
  articles: Array<any> = []
  myLocSub!: Subscription
  mysub!: Subscription;
  searchSub!: Subscription
  loc: string
  constructor(private ns: NewsService, private title: Title, private shs: ShareDataService, private router: Router, private ls: LocationService) {

  }
  getdata(loc: string) {
    this.mysub = this.ns.getnews("general").subscribe(
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
  search(q: string) {
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
    this.myLocSub = this.ls.getLocation().subscribe(
      res => {
        this.loc = res.countryCode.toLowerCase()
        this.getdata(this.loc)
      },
      error => {
        console.log(error)
      }
    )


    this.title.setTitle("general")
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.mysub.unsubscribe()
  }

}



