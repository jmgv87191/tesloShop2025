import { Routes } from '@angular/router';
import { NotAuthenticatedGuard } from './auth/interceptors/not-authenticated.guard';

export const routes: Routes = [

    {
        path:'auth',
        loadChildren: ()=>import('./auth/auth.routes'),
        canMatch:[
            ()=>{
                console.log('Hola mundo')
                return true
            },
            NotAuthenticatedGuard,
        ]
    }
    ,
    {
        path:'',
        loadChildren: ()=> import('./store-front/store-front.routes')
    }
];
