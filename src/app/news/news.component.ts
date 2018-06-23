import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  items$:Observable<any>;
  constructor() { }

  ngOnInit() {
  }

}
