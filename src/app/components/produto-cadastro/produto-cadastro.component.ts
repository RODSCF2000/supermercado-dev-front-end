import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from 'src/app/models/produto.model';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

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
  }

  cadastrar() {
    this.produtosService.cadastrar(this.produto).subscribe(
      () => {
        alert('Produto cadastrado com sucesso!!');
        this.router.navigateByUrl('shop');
      }
    );
  }

}
