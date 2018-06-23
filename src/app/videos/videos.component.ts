import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input()
  items$:Observable<any>;
  constructor() { }

  ngOnInit() {
  }

}
