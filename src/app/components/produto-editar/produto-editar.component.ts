import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  public produto: Produto = {
    id: null,
    nome: '',
    preco: '',
    quantidade: null,
    detalhes: '',
    foto: '',
    foto1: ''

};

  constructor(private routerActive: ActivatedRoute,
              private router: Router,
              private produtosService: ProdutosService) {
  }

  ngOnInit(): void {
    const id = Number( this.routerActive.snapshot.paramMap.get('id'));
    this.produtosService.getProdutoById(id).subscribe(
      produto => {
        this.produto = produto;
      }
    );
  }

  editar() {
    this.produtosService.editar(this.produto).subscribe(
      () => {
        alert('Produto editado com sucesso!!');
        this.router.navigateByUrl('shop');
      }
    );
  }
}
