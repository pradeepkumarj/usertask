import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ExpiredtaskComponent } from './expiredtask/expiredtask.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component : HomeComponent,
  children: [
    { path: 'tasklist', component: TasklistComponent},
    { path: 'expiredtask', component: ExpiredtaskComponent},
  ]
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
})
export class AppRoutingModule { }
