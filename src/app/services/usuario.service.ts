import { Injectable } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  static cadastar() {
    throw new Error('Method not implemented.');
  }

  public usuarios: Array<Usuario> = [
    {
        id: 1,
        nome: 'adm',
        sobrenome: 'adm',
        login: 'adm',
        senha: 'adm',
        confirmaSenha: 'adm',
        nascimento: '29/05/2001',
        telefone: 33339999,
        email: 'adm@gmail.com',
        cep: 1234,
        ativo: false,
    }  
  ];

  constructor(private router: Router){

   }

  cadastrar(usuario: Usuario) {

      var loginExistente = false;
      for(let i=0;i<this.usuarios.length;i++){
        if(this.usuarios[i].login.toString==usuario.login.toString){
          loginExistente=true;
        }
      }

      if(!loginExistente && usuario.confirmaSenha==usuario.senha){
        const id = this.usuarios.length+1;
        usuario.id = id;
        this.usuarios.push(usuario);
        alert('Cadastro realizado com sucesso!!');
        this.router.navigate(['login']);
      }else if(loginExistente){
        alert('Login já existente!!');
      }else if(!(usuario.confirmaSenha==usuario.senha)){
        alert('Atenção!! Foram informadas senhas distintas.');
      }
  }

  entrar(usuario: Usuario) {

    var loginExistente = false;
    for(let i=0;i<this.usuarios.length;i++){
      if(this.usuarios[i].login.toString==usuario.login.toString && this.usuarios[i].senha.toString==usuario.senha.toString){
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

  editar(usuario: Usuario) {
    for(let obj of this.usuarios) {
      if (usuario.id === obj.id) {
        obj = usuario;
        break;
      }
    }
  }


  getUsuarioId(id: number) {
    for(const obj of this.usuarios) {
      if (id === obj.id) {
        return obj;
      }
    }

    return null;
  }

  getAll(): Array<Usuario> {
    return this.usuarios;
  }

  deletar(id: number) {

    for(let i=0; i<this.usuarios.length; i++) {
      if (id === this.usuarios[i].id) {
        this.usuarios.splice(i, 1);
        break;
      }
    }

  }

  retornaAdm() {
    var retorna = false;
    for(let i=0; i<this.usuarios.length; i++) {
      if (this.usuarios[i].login=='adm' && this.usuarios[i].ativo==true) {
        retorna = true;
      }
    
    }

    return retorna;

  }

  retornaUsuAtivo(){
    for(let i=0; i<this.usuarios.length; i++) {
      if (this.usuarios[i].ativo==true) {
        return this.usuarios[i];
      }
    
    }
    return null;
  }

  existeUsuAtivo(){
    for(let i=0; i<this.usuarios.length; i++) {
      if (this.usuarios[i].ativo==true) {
        return true;
      }
    
    }
    return false;
  }


}
