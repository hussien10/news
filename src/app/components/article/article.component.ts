import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  articles:any;
  constructor(private ssh:ShareDataService) { }

  ngOnInit(): void {
    this.articles=this.ssh.getData()
    console.log(this.articles)
  }

}
