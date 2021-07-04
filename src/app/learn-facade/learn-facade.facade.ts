import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormsDataSource, RegistrationForm } from './learn-facade.model';

export interface State {
  regForm: RegistrationForm;
}

let _state: State = {
  regForm: {},
};

@Injectable()
export class LearnFacade {
  private store = new BehaviorSubject<State>(_state);
  private state$ = this.store.asObservable();

  regForm$ = this.state$.pipe(map((state) => state.regForm));

  vm$: Observable<State> = combineLatest([this.regForm$]).pipe(
    map(([regForm]) => {
      return { regForm };
    })
  );

  constructor(private learnFacadeService: FormsDataSource) {}

  updateRegistrationForm(formData): void {
    const regForm: RegistrationForm = {
      name: formData.name,
      email: formData.email,
      phoneNo: formData.phoneNo,
      district: formData.district,
      state: formData.state,
    };
    this.updateState({ ..._state, regForm });
    this.learnFacadeService.updateRegistrationFormData(regForm);
  }

  getRegistrationForm() {
    const id = '1234';
    this.learnFacadeService
      .getRegistrationFormData(id)
      .subscribe((data: RegistrationForm) => {
        const regForm: RegistrationForm = {
          name: data.name,
          email: data.email,
          phoneNo: data.phoneNo,
          district: data.district,
          state: data.state,
        };
        this.updateState({ ..._state, regForm });
      });
  }

  updateState(state: State): void {
    this.store.next((_state = state));
  }
}
