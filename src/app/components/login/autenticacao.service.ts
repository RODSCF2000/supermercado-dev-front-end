import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private usuarioAutenticado: boolean = false;
  private usuarioAdm: boolean = false;

  constructor() { }

  logarUsuario(){
    this.usuarioAutenticado = true;
  }

  logoutUsuario(){
    this.usuarioAutenticado = false;
  }


  isUsuarioAutenticado():boolean{
    return this.usuarioAutenticado;
  }

  setAdm(){
    this.usuarioAdm = true;
  }

  isUsuarioAdm():boolean{
    return this.usuarioAdm;
  }
}
