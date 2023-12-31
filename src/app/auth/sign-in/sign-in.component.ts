import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form!: FormGroup;
  isLoading = false;

  passwordVisible = false;
  password?: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    });
  }

  signUp() {
    this.router.navigate(['auth/signUp']);
  }

  submit() {
    if (this.form.valid) {
      const { email, password, rememberMe } = this.form.getRawValue();
      this.auth.emailSignIn(email, password, rememberMe).subscribe(() => {
        this.router.navigate(['tasks']);
      });
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  signInAnonymously() {
    this.auth.signInAnonymously()
  }
}
