import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzAlertModule,
    NzCheckboxModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
  ],
})
export class AuthModule {}
