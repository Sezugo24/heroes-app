import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';





@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe:any = {};


  constructor( private activatedRouter: ActivatedRoute,
               private heroesServices: HeroesService ) {

      this.activatedRouter.params.subscribe( params => {
       
        this.heroe = this.heroesServices.getHeroe( params["id"]);
        console.log(this.heroe);
      });

   }

   
   showHomeDC(data: string){
      if (data === 'DC'){

        return true
      }
   }
   showHomeMarvel(data: string){
    if (data === 'Marvel'){

      return true
    }
 }

   


   
}
