import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../services/theme.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  @Input()
  items$: Observable<any>;

  constructor(
    public themeService: ThemeService
  ) { }

  ngOnInit() {
  }

}
