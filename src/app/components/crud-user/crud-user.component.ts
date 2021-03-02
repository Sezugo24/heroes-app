import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html'
})
export class CrudUserComponent implements OnInit {
  user :String;
  password: String;
  constructor(private _router: Router ) { }

  ngOnInit(): void {
  }
  verRegistrar(){

    this._router.navigate( ['/about']);
  }
}
