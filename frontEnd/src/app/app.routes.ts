import { Routes, RouterModule, Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnInit, NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'create-user',
        component: CreateUserComponent
    },
    {
        path:'dashboard',
        canActivate: [AuthGuardService],
        component: DashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule],
    providers: [
      { provide: PathLocationStrategy, useClass: PathLocationStrategy },
  
    ]
  })
  export class AppRoutes implements OnInit {
  
    constructor(private router: Router) {
    }
  
    ngOnInit() {
    }
  }