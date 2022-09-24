import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
