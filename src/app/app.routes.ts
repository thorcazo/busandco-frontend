import { Routes } from '@angular/router';
import { OrigenDestinoComponent } from './paginas/origen-destino/origen-destino.component';
import { LineaDetalleComponent } from './paginas/linea-detalle/linea-detalle.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { IncidenciasComponent } from './paginas/incidencias/incidencias.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { LineasComponent } from './paginas/lineas/lineas.component';
import { NoticiaExtendidaComponent } from './paginas/noticia-extendida/noticia-extendida.component';
import { LoginComponent } from './paginas/login/login.component';
import { Component } from '@angular/core';
import { AdminListadoComponent } from './paginas/admin-listado/admin-listado.component';
import { AdminCrearComponent } from './paginas/admin-crear/admin-crear.component';
import { Error404Component } from './paginas/error404/error404.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'origen-destino',
        pathMatch: 'full',

    },
    {
        path: 'origen-destino',
        component: OrigenDestinoComponent,
        title: 'Origen y Destino - Bus&Co',
    },
    {
        path: 'lineas',
        component: LineasComponent,
        title: 'Líneas - Bus&Co',
    },
    {
        path: 'detalle-linea/:id',
        component: LineaDetalleComponent,
        title: 'Detalle Linea - Bus&Co',
    },
    {
        path: 'noticias',
        component: NoticiasComponent,
        title: 'Noticias - Bus&Co',
    },
    {
        path: 'noticia/:id',
        component: NoticiaExtendidaComponent,
        title: 'Noticia - Bus&Co',
    },
    {
        path: 'incidencias',
        component: IncidenciasComponent,
        title: 'Incidencias - Bus&Co',
    },
    {
        path: 'contacto',
        component: ContactoComponent,
        title: 'Contacto - Bus&Co',
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Iniciar sesión - Bus&Co',
    },
    {
        path: 'admin-listado',
        component: AdminListadoComponent,
        canActivate: [loginGuard],
        title: 'Líneas - Administración - Bus&Co',
    },
    {
        path: 'admin-crear',
        component: AdminCrearComponent,
        canActivate: [loginGuard],
        title: 'Crear línea - Administración - Bus&Co',
    },
    {
        path: '**',
        component: Error404Component,
        pathMatch: 'full',
    },
    
];
