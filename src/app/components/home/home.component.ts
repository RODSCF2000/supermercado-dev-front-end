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

  public produtos: Produto[] = [];

  constructor(private router: Router,
              private produtosService: ProdutosService,
              private usuariosService: UsuarioService) {
  }

  ngOnInit(): void {
    this.produtosService.getAll().subscribe(
      produtos => {
        this.produtos = produtos;
      }
    );
  }

  deletar(id: number) {
    this.produtosService.deletar(id).subscribe(
      () => {}
    );
  }

  retornaAdm(){
    this.usuariosService.retornaAdm().subscribe(
      () => {}
    );
  }

  retornaNomeUsuAtivo(){

  }
}
