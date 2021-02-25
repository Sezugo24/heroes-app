import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { Router } from '@angular/router';
//import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  heroesSearch: Heroe[] = []
  constructor(private _router: Router,
    //private navbarComponent: NavbarComponent,
    private heroesServices: HeroesService ) { }

  ngOnInit(): void {
    //this.heroesSearch = this.navbarComponent.buscarHeroe();
    this.heroesSearch = this.heroesServices.searchHeroe('b');
  }
  verHeroe(idx: number){
    this._router.navigate( ['/heroe', idx] );
  }

}
