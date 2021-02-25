import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../service/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private heroesServices: HeroesService ) { 
   
  }

  ngOnInit(): void {
  }

  buscarHeroe( text: string){
      console.log(this.heroesServices.searchHeroe(text)); 
  }

}
