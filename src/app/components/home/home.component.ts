import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Produto } from 'src/app/models/produto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public produtos: Array<Produto> = [ ];


  constructor(private router: Router,
            private produtosService: ProdutosService,
            private usuariosService: UsuarioService) { 
      this.produtos = this.produtosService.getAll();
  }

  ngOnInit(): void {
  }

  deletar(id: number) { 
       this.produtosService.deletar(id);
  }

  retornaAdm(){
    return this.usuariosService.retornaAdm;
  }

  retornaNomeUsuAtivo(){

  }

}