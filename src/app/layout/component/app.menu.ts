import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Admin',
                items: [{ label: 'Administrador', icon: 'pi pi-fw pi-home', routerLink: ['/admin'] },
                { label: 'Perfil', icon: 'pi pi-fw pi-user', routerLink: ['/admin/perfil'] },]
            },
            {
                label: 'Seguridad',
                items: [
                    { label: 'Usuarios', icon: 'pi pi-fw pi-id-card', routerLink: ['/admin/usuario'] },
                    { label: 'Roles & Permisos', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/roles'] }
                ]
            },
            {
                label: 'Gestión Inventarios',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Categoria',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/admin/inventario/categoria']
                    },
                    {
                        label: 'Producto',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/admin/inventario/producto']
                    },
                    {
                        label: 'Almacen',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/admin/inventario/almacen']
                    },
                    {
                        label: 'Sucursal',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/admin/inventario/sucursal']
                    }
                ]
            },

            {
                label: 'Gestión Pedidos',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Cliente/Proveedor',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/admin/cliente']
                    },
                    {
                        label: 'Compra',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/admin/nota/compra']
                    },
                    {
                        label: 'Nueva Compra',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/admin/nota/compra/nuevo']
                    },
                    {
                        label: 'Venta',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/admin/nota/venta']
                    },
                    {
                        label: 'Nueva Venta',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/admin/nota/venta/nuevo']
                    },
                ]
            }
        ];
    }
}
