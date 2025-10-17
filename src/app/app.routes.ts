import { Routes } from '@angular/router';
import { Inicio } from './web/inicio/inicio';
import { Blog } from './web/blog/blog';
import { Nosotros } from './web/nosotros/nosotros';
import { Perfil } from './admin/perfil/perfil';
import { Usuario } from './admin/usuario/usuario';
import { SitioLayout } from './layout/sitio-layout/sitio-layout';
import { AppLayout } from './layout/component/app.layout';
import { Inventario } from './admin/inventario/inventario';
import { Categoria } from './admin/inventario/categoria/categoria';
import { Producto } from './admin/inventario/producto/producto';
import { Almacen } from './admin/inventario/almacen/almacen';
import { Sucursal } from './admin/inventario/sucursal/sucursal';
import { Cliente } from './admin/cliente/cliente';
import { Notas } from './admin/nota/notas/notas';

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
            },
            {
                path: 'inventario',
                component: Inventario,
                children: [
                    {
                        path: 'categoria',
                        component: Categoria
                    },
                    {
                        path: 'producto',
                        component: Producto
                    },
                    {
                        path: 'almacen',
                        component: Almacen
                    },
                    {
                        path: 'sucursal',
                        component: Sucursal
                    }
                ]

            },
            {
                path: 'cliente',
                component: Cliente
            },
            {
                path: 'nota',
                component: Notas
            },
        ]
    }

];
