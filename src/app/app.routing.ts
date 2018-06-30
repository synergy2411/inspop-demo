import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './user/user.component';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';

export const APP_ROUTES : Routes = [
    {
        path : '',
        redirectTo : 'login',
        pathMatch : 'full'
    },{
        path : 'login',
        component : LoginComponent
    },{
        path : 'register',
        component : RegisterComponent
    }, {
        path : 'user',
        component : UserComponent,
        canActivate : [LoginGaurdService]
    },{
        path : 'obsdemo',
        component : ObsDemoComponent
    },{
        path : 'pipe',
        component : PipeDemoComponent
    },{
        path : 'product/:id/:name',
        component : ProductComponent,
        children : [
            {
                path : 'overview/:id',
                component : OverviewComponent
            },{
                path : 'spec/:name',
                component : SpecificationComponent
            }
        ]
    },{
        path : "**",
        redirectTo : 'login',
        pathMatch : 'full'
    }
] 

//http://localhost:4200/nowhere