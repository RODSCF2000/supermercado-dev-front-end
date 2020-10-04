import { Injectable } from '@angular/core';

import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public usuarios: Array<Usuario> = [
    {
        id: 1,
        login: 'adm',
        senha: 'adm',
        nascimento: '29/05/2001',
        telefone: 33339999,
        email: 'adm@gmail.com',
        cep: 1234
    }  
  ];

  constructor() { }

  cadastrar(usuario: Usuario) {
    const id = this.usuarios.length+1;
    usuario.id = id;
    this.usuarios.push(usuario);
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


}
