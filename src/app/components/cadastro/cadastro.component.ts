import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public usuario: Usuario = {
    id: null,
    login: '',
    senha: '',
    nascimento: '',
    telefone: null,
    email: '',
    cep: null
  };


  constructor(private router: Router,
    private usuariosService: UsuarioService) {

}

  ngOnInit(): void {
  }

  cadastrar() {
    
      alert('Cadastro realizado com sucesso!!');
      this.router.navigate(['login']);
    
  }

}
