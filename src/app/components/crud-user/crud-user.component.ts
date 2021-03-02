import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperUsuariosService, superUsuario } from '../../service/usuarios.service';
@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html'
})
export class CrudUserComponent implements OnInit {
  user :String;
  password: String;
  users: superUsuario[] = [];

  constructor(private _router: Router,
              private _usuariosService: SuperUsuariosService) { }

  ngOnInit(): void {
    this.users = this._usuariosService.getUsusarios();
  }
  verRegistrar(){
    this._router.navigate( ['/about']);
  }
}
