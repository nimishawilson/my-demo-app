import { Observable } from 'rxjs';

export interface RegistrationForm {
  name?: string;
  email?: string;
  phoneNo?: string;
  district?: string;
  state?: string;
}

export abstract class FormsDataSource {
  abstract getRegistrationFormData(uid: string): Observable<RegistrationForm>;
  abstract updateRegistrationFormData(formData: RegistrationForm): boolean;
}
