import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router,
  ) { }
  ngOnInit(): void {
  }

  loginSubmitted() {
    this.router.navigate(['/profile']); // Navigate to login page
  }
}
