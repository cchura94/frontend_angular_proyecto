import { Routes } from '@angular/router';
import { Inicio } from './web/inicio/inicio';
import { Blog } from './web/blog/blog';
import { Nosotros } from './web/nosotros/nosotros';
import { Perfil } from './admin/perfil/perfil';
import { Usuario } from './admin/usuario/usuario';

export const routes: Routes = [
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

    {
        path: 'admin/perfil',
        component: Perfil
    },
    {
        path: 'admin/usuario',
        component: Usuario
    }
];
