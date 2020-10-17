import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Produto } from 'src/app/models/produto.model';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public produtos: Array<Produto> = [ ];


  constructor(private produtosService: ProdutosService,
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
}