import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormsDataSource, RegistrationForm } from './learn-facade.model';

@Injectable()
export class LearnFacadeService implements FormsDataSource {
  getRegistrationFormData(uid: string): Observable<RegistrationForm> {
    const regForm: RegistrationForm = {
      name: 'Nimisha',
      email: 'nimisha@gmail.com',
      phoneNo: '9983673670',
      district: 'Thrissur',
      state: 'Kerala',
    };
    return of(regForm);
  }

  updateRegistrationFormData(formData: RegistrationForm): boolean {
    return true;
  }
}
