import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { SuperUsuariosService, superUsuario } from '../../service/usuarios.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  users: superUsuario[] = [];
  email: string;
  password: string;

  constructor( private _heroesService: HeroesService,
               private _usuariosService: SuperUsuariosService,
               private _router: Router ) { 
      
  }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();
    this.users = this._usuariosService.getUsusarios();
    
    //console.log(this.heroes);


  }

  verHeroe(idx: number){
    this._router.navigate( ['/heroe', idx] );
  }
  verCrudUser(){
    //traer usuarios de la bbase de datos
    let userInfo: any = this._usuariosService.searchUsuario(this.email);
    let passwordUser = userInfo[0].password;
    console.log("contraseña ingresada, pass db: ");
    console.log(this.password);
    console.log(passwordUser);

    if(passwordUser == this.password ){
      this._router.navigate( ['/newUser'] );
    }
    else{
      console.log("usuario o contraseña incorrectos")
    }
    console.log(this.email);
    console.log(this.password);
    console.log(this._usuariosService.searchUsuario(this.email));    
  }

}
