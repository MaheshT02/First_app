import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValuesService {
  formData: any = {};

  constructor() { }

  setFormValues(formData: any) {
    this.formData = formData;
  }

  getFormValues() {
    return this.formData;
  }
}
