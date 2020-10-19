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
    const id = Number( this.routerActive.snapshot.paramMap.get('id') );

    this.produto = this.produtosService.getProdutoById(id);
  }

  ngOnInit(): void {
  }

  editar() {
    this.produtosService.editar(this.produto);
    alert('Produto editado com sucesso!!')
    this.router.navigateByUrl('shop');
  }
}
