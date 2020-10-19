import { Injectable } from '@angular/core';

import { Produto } from 'src/app/models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public produtos: Array<Produto> = [
    {
      id: 1,
      nome: 'Carne de boi',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'oranges',
      foto: "background-image: url('../../../assets/img/product/product-1.jpg')",
      foto1: "../../../assets/img/product/product-1.jpg"

    },
    {
      id: 2,
      nome: 'Banana',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'oranges',
      foto: "background-image: url('../../../assets/img/product/product-2.jpg')",
      foto1: "../../../assets/img/product/product-2.jpg"
    },
    {
      id: 3,
      nome: 'Goiaba',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'oranges',
      foto: "background-image: url('../../../assets/img/product/product-3.jpg')",
      foto1: "../../../assets/img/product/product-3.jpg"

    },
    {
      id: 4,
      nome: 'Uva',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'fresh-meat',
      foto: "background-image: url('../../../assets/img/product/product-4.jpg')",
      foto1: "../../../assets/img/product/product-4.jpg"
    },
    {
      id: 5,
      nome: 'Hamburguer',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'fresh-meat',
      foto: "background-image: url('../../../assets/img/product/product-5.jpg')",
      foto1: "../../../assets/img/product/product-5.jpg"
    },
    {
      id: 6,
      nome: 'Melão',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'fresh-meat',
      foto: "background-image: url('../../../assets/img/product/product-6.jpg')",
      foto1: "../../../assets/img/product/product-6.jpg"
    },
    {
      id: 7,
      nome: 'Melancia',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'vegetables',
      foto: "background-image: url('../../../assets/img/product/product-7.jpg')",
      foto1: "../../../assets/img/product/product-7.jpg"

    },
    {
      id: 8,
      nome: 'Maça',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'vegetables',
      foto: "background-image: url('../../../assets/img/product/product-8.jpg')",    
      foto1: "../../../assets/img/product/product-8.jpg"

    },
    {
      id: 9,
      nome: 'Uva passas',
      preco: '30.0',
      quantidade: 3,
      detalhes: 'vegetables',
      foto: "background-image: url('../../../assets/img/product/product-9.jpg')",
      foto1: "../../../assets/img/product/product-9.jpg"
    },
    {
        id: 10,
        nome: 'Frango',
        preco: '30.0',
        quantidade: 3,
        detalhes: 'fastfood',
        foto: "background-image: url('../../../assets/img/product/product-10.jpg')",
        foto1: "../../../assets/img/product/product-10.jpg"
    },
      {
        id: 11,
        nome: 'Suco de laranja',
        preco: '30.0',
        quantidade: 3,
        detalhes: 'fastfood',
        foto: "background-image: url('../../../assets/img/product/product-11.jpg')",
        foto1: "../../../assets/img/product/product-11.jpg"
    },
      {
        id: 12,
        nome: 'Kit de frutas',
        preco: '30.0',
        quantidade: 3,
        detalhes: 'fastfood',
        foto: "background-image: url('../../../assets/img/product/product-12.jpg')",
        foto1: "../../../assets/img/product/product-12.jpg"
    }
  ];

  constructor() { }

  cadastrar(produto: Produto) {
    const id = this.produtos.length+1;
    produto.id = id;
    produto.nome = produto.nome;
    produto.foto = "background-image: url('../../../assets/img/product/product-10.jpg')";
    produto.foto1= "../../../assets/img/product/product-10.jpg"

    this.produtos.push(produto);
  }

  editar(produto: Produto) {
    for(let obj of this.produtos) {
      if (produto.id === obj.id) {
        obj = produto;
        break;
      }
    }
  }

  getProdutoById(id: number) {
    for(const obj of this.produtos) {
      if (id === obj.id) {
        return obj;
      }
    }

    return null;
  }

  getAll(): Array<Produto> {
    return this.produtos;
  }

  deletar(id: number) {

    for(let i=0; i<this.produtos.length; i++) {
      if (id === this.produtos[i].id) {
        if(confirm('Deseja excluir o item?')){
          this.produtos.splice(i, 1);
          alert('Produto excluido com sucesso !!')
        }
      }
    }
  }


}
