import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule
            ],
    exports: [LoginComponent],
    declarations: [LoginComponent]
})
export class LoginModule{}