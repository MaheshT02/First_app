import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { FormControl, FormGroup } from '@angular/forms';
import { FormValuesService } from '../../form-values.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected styleUrl to styleUrls
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router,
    private formValuesService: FormValuesService
  ) { } // Inject Router
  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    gender: new FormControl(""),
    password: new FormControl(""),
    repass: new FormControl("")
  });

  registerSubmitted() {
    console.log(this.registerForm);
    this.formValuesService.setFormValues(this.registerForm.value);
    this.router.navigate(['/login']); // Navigate to login page
  }
}
