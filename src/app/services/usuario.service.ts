import { Injectable } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const URL = environment.api;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  static cadastar() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient, private router: Router) { }

  cadastrar(usuario: Usuario): Observable<any> {
    // var loginExistente = false;
    // for(let i=0;i<this.usuarios.length;i++){
    //   if(this.usuarios[i].login.toString==usuario.login.toString){
    //     loginExistente=true;
    //   }
    // }

    // if(!loginExistente && usuario.confirmaSenha==usuario.senha){
    //   const id = this.usuarios.length+1;
    //   usuario.id = id;
    //   this.usuarios.push(usuario);
    //   alert('Cadastro realizado com sucesso!!');
    //   this.router.navigate(['login']);
    // }else if(loginExistente){
    //   alert('Login já existente!!');
    // }else if(!(usuario.confirmaSenha==usuario.senha)){
    //   alert('Atenção!! Foram informadas senhas distintas.');
    // }
    return null;
  }

  entrar(usuario: Usuario): Observable<any> {
    // var loginExistente = false;
    // for(let i=0;i<this.usuarios.length;i++){
    //   if(this.usuarios[i].login.toString==usuario.login.toString && this.usuarios[i].senha.toString==usuario.senha.toString){
    //     loginExistente=true;
    //   }
    // }

    // if(loginExistente){

    //   usuario.ativo = true;
    //   alert('Login efetuado com sucesso!!');
    //   this.router.navigate(['']);
    // }else{
    //   alert('Credenciais incorretas!!');
    // }
    return null;
  }

  editar(usuario: Usuario): Observable<any> {
    return this.http.put(URL + '/usuarios/' + usuario.id, usuario);
  }

  getUsuarioId(id: number): Observable<any> {
    return this.http.get(URL + '/usuarios/' + id);
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(URL + '/usuarios');
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(URL + '/usuarios/' + id);
  }

  retornaAdm(): Observable<any> {
    // var retorna = false;
    // for(let i=0; i<this.usuarios.length; i++) {
    //   if (this.usuarios[i].login=='adm' && this.usuarios[i].ativo==true) {
    //     retorna = true;
    //   }
    // }

    // return retorna;
    return null;
  }

  retornaUsuAtivo(): Observable<any> {
    // for(let i=0; i<this.usuarios.length; i++) {
    //   if (this.usuarios[i].ativo==true) {
    //     return this.usuarios[i];
    //   }
    // }
    // return null;
    return null;
  }

  existeUsuAtivo(): Observable<any> {
    // for(let i=0; i<this.usuarios.length; i++) {
    //   if (this.usuarios[i].ativo==true) {
    //     return true;
    //   }
    // }
    // return false;
    return null;
  }

}
