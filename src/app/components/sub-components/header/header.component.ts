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

  constructor(private usuariosService: UsuarioService) {           
  
    for(let i=0; i<usuariosService.getAll.length; i++) {
      if (usuariosService.getAll[i].ativo==true) {
        this.usuario = usuariosService.getAll[i];
      }
    
    }

  }

  ngOnInit(): void {
  }

  retornaUsuAtivo(){
    this.usuariosService.retornaUsuAtivo;
  }

  existeUsuAtivo(){
    this.usuariosService.existeUsuAtivo;
  }

}
