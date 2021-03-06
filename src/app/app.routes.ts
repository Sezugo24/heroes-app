import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import {CrudUserComponent} from './components/crud-user/crud-user.component'
import { Component } from '@angular/core';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'newUser', component: CrudUserComponent },
    { path: 'heroe/:id', component: HeroeComponent},
    { path: 'heroes/search', component: SearchComponent},
    { path: 'heroes/search:id', component: SearchComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'  },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
