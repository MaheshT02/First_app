import { Component } from '@angular/core';
import { FormValuesService } from '../../form-values.service'; // Import FormValuesService

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  formData: any;

  constructor(private formValuesService: FormValuesService) { }

  ngOnInit(): void {
    this.formData = this.formValuesService.getFormValues(); // Retrieve form values
  }
}
