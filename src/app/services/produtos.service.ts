import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const URL = environment.api;

import { Produto } from 'src/app/models/produto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  cadastrar(produto: Produto): Observable<any> {
    // tslint:disable-next-line: quotemark
    produto.foto = "background-image: url('../../../assets/img/product/product-10.jpg')";
    produto.foto1 = '../../../assets/img/product/product-10.jpg';
    return this.http.post(URL + '/produtos', produto);
  }

  editar(produto: Produto): Observable<any> {
    return this.http.put(URL + '/produtos/' + produto.id, produto);
  }

  getProdutoById(id: number): Observable<any> {
    return this.http.get(URL + '/produtos/' + id);
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(URL + '/produtos');
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(URL + '/produtos/' + id);
  }
}
