import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faNewspaper, faHandHoldingUsd, faHeartbeat, faDatabase, faDumbbell, faAtom, faGamepad, faGlobe,faRss } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { LocationService } from './services/location.service';
import { NewsService } from './services/news.service';
import { ShareDataService } from './services/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';
  faNewspaper = faNewspaper;
  faHandHoldingUsd = faHandHoldingUsd
  faHeartbeat = faHeartbeat
  faDatabase = faDatabase
  faDumbbell = faDumbbell
  faAtom = faAtom
  faGamepad = faGamepad
  faGlobe = faGlobe
  faRss=faRss
  constructor(private _router:Router){

  }
  search(e:any){
    this._router.navigate(["/search",e])
  }
}
