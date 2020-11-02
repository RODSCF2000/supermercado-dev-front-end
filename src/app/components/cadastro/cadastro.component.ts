import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario: Usuario = {
    id: null,
    nome: '',
    sobrenome: '',
    login: '',
    senha: '',
    confirmaSenha: '',
    nascimento: '',
    telefone: null,
    email: '',
    cep: null,
    ativo: false
  };

  constructor(private usuariosService: UsuarioService,
              private router: Router,
              private routerActive: ActivatedRoute) {}

  ngOnInit(): void {
  }

  cadastrar() {
    this.usuariosService.cadastrar(this.usuario).subscribe(
      () => {
      }
    );
  }
}
