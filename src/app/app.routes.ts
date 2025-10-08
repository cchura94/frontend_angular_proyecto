import { Routes } from '@angular/router';
import { Inicio } from './web/inicio/inicio';
import { Blog } from './web/blog/blog';
import { Nosotros } from './web/nosotros/nosotros';
import { Perfil } from './admin/perfil/perfil';
import { Usuario } from './admin/usuario/usuario';
import { SitioLayout } from './layout/sitio-layout/sitio-layout';
import { AppLayout } from './layout/component/app.layout';

export const routes: Routes = [
    {
        path: '',
        component: SitioLayout,
        children: [
            { 
                path: '',
                component: Inicio
            },
            { 
                path: 'blog',
                component: Blog
            },
            { 
                path: 'nosotros',
                component: Nosotros
            },
            { 
                path: 'auth',
                loadChildren: () => import("./auth/auth-module").then(m => m.AuthModule)
            },
        ]
    },
    {
        path: 'admin',
        component: AppLayout,
        children: [
            {
                path: 'perfil',
                component: Perfil
            },
            {
                path: 'usuario',
                component: Usuario
            }
        ]
    }

];
