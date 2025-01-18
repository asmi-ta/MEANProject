import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdateComponent } from './update/update.component';

export const routes: Routes = [
    {
        path:'Home',
        component:HomeComponent
    },
    {
        path:'Login',
        component:LoginComponent
    },
    {
        path:'SignUp',
        component:SignUpComponent
    },
    {
        path:'backend',
        component:HomeComponent
    },
    {
        path:'Update',
        component:UpdateComponent
    }


];
