import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LearnFacade, State } from './learn-facade.facade';
import { FormsDataSource } from './learn-facade.model';
import { LearnFacadeService } from './learn-facade.service';

@Component({
  selector: 'app-learn-facade',
  templateUrl: './learn-facade.component.html',
  styleUrls: ['./learn-facade.component.scss'],
  providers: [
    LearnFacade,
    { provide: FormsDataSource, useClass: LearnFacadeService },
  ],
})
export class LearnFacadeComponent implements OnInit {
  constructor(public facade: LearnFacade) {}

  vm$: Observable<State> = this.facade.vm$;

  ngOnInit(): void {
    // to load data from facade to form initially
    this.facade.getRegistrationForm();
  }
}
