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

  public produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService,
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
    return this.usuariosService.retornaAdm;
  }
}
