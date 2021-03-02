import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';


export interface superUsuario {
    nombre: string;
    password: string;
}

@Injectable()
export class SuperUsuariosService {

    private superUsuarios: superUsuario[] = [
        {
            nombre: "juan",
            password: "1234"
        },
        {
            nombre: "sebastian",
            password: "abc" 
        }
    ];
    
    getUsusarios(){
        return this.superUsuarios;
    }
    getUsuario(idx: string){
        return this.superUsuarios[idx]
    }

    searchUsuario(termino: string){

        let usuariosArr:superUsuario[] = [];
        termino = termino.toLowerCase(); //Recibimos nuestro termino y mediente de la funcion toLowerCase todo nyestro texto será en minuscula
        let index : number = -1;
        for (let usuario of this.superUsuarios){          
          let nombre = usuario.nombre.toLowerCase();
          if (nombre.indexOf(termino) >=0 ){
            usuariosArr.push(usuario);
          }    
        }
        return usuariosArr;
      }

      

}