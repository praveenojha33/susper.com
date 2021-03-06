import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { Observable } from 'rxjs/Observable';
import { ThemeService } from '../services/theme.service';
import { SpeechSynthesisService } from '../services/speech-synthesis.service';
declare var window: any;
declare var SpeechSynthesisUtterance: any;

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css']
})
export class InfoboxComponent implements OnInit {
  title: string = '';
  description: string = '';
  results: object;
  query$: any;
  image: string;
  isVisible: boolean;
  resultsearch = '/search';
  speechMode: any;
  content_response$: Observable<any>;
  image_response$: Observable<any>;
  constructor(private store: Store<fromRoot.State>,
              private synthesis: SpeechSynthesisService,
              public themeService: ThemeService) {
    this.query$ = store.select(fromRoot.getwholequery);
    this.query$.subscribe(query => {
      this.speechMode = query.mode;
    });
    this.content_response$ = store.select(fromRoot.getKnowledgeContent);
    this.content_response$.subscribe(res => {
    this.isVisible = false;
    this.results = res;
      if (res.extract) {
        this.title = res.title;
        this.description = res.extract;
        this.isVisible = true;
        if (this.speechMode === 'speech') {
          this.startSpeaking(this.description);
        }
      }
    });
    this.image_response$ = store.select(fromRoot.getKnowledgeImage);
    this.image_response$.subscribe(res => {
      if (typeof res.RelatedTopics !== 'undefined') {
        this.image = res.RelatedTopics[0].Icon.URL;
      } else {
        this.image = '';
      }
    });
  }
  startSpeaking(description) {
        let msg = new SpeechSynthesisUtterance(description);
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(msg);
      }

  ngOnInit() {
  }
}
