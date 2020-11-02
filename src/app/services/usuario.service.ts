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

  public usuariosOrder: Usuario[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  cadastrar(usuario: Usuario): Observable<any> {
     


    this.getAllOrder().subscribe(
      usuarios => {
        this.usuariosOrder = usuarios;

        var loginExistente = false;
         for(let i=0;i<this.usuariosOrder.length;i++){
           if(this.usuariosOrder[i].login==usuario.login){
             loginExistente=true;
           }
         }
        if(!loginExistente && usuario.confirmaSenha==usuario.senha){  
           const id = this.usuariosOrder[0].id;
           usuario.id = id+1;
           alert('Usuario cadastrado com sucesso!!');
           this.router.navigateByUrl('home');
        }else if(loginExistente){
          alert('Atenção!! Usuario já existente.');
          usuario = null;
        }else if(!(usuario.confirmaSenha==usuario.senha)){
           alert('Atenção!! Foram informadas senhas distintas.');
           usuario = null;
          }

      }
    );
    return this.http.post(URL + '/usuarios/',usuario);
  }

  entrar(usuario: Usuario): Observable<any> {


    this.getAllOrder().subscribe(
      usuarios => {
        this.usuariosOrder = usuarios;

        var loginExistente = false;
        for(let i=0;i<this.usuariosOrder.length;i++){
          if(this.usuariosOrder[i].login==usuario.login && this.usuariosOrder[i].senha==usuario.senha){
            loginExistente=true;
          }
        }

        if(loginExistente){
            usuario.ativo = true;
            alert('Login efetuado com sucesso!!');
            this.router.navigate(['']);
        }else{
            alert('Credenciais incorretas!!');
        }

      }
    );

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

  getAllOrder(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(URL + '/usuarios?_sort=id&_order=desc');
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
