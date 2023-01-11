import { Injectable } from '@angular/core';
import { IProduto, product } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = product;

  constructor() { }

  getAll(){
    return this.produtos;
  }
  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
