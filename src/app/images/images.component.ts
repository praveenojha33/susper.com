import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
//Transfer_functions_related_to_image_search_here(Pending)
  @Input()
  items$:Observable<any>;
  constructor() { }

  ngOnInit() {
  }

}
