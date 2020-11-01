import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario;

  constructor(private usuariosService: UsuarioService) {}

  ngOnInit(): void {
    this.usuariosService.getAll().subscribe(
      usuarios => {
        usuarios.forEach(element => {
          if (element.ativo) {
            this.usuario = element;
          }
        });
      }
    );
  }

  retornaUsuAtivo(){
    this.usuariosService.retornaUsuAtivo().subscribe(
      () => {}
    );
  }

  existeUsuAtivo(){
    this.usuariosService.existeUsuAtivo().subscribe(
      () => {}
    );
  }

}
