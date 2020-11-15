import { ProdutoComponent } from './components/produto/produto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ShopComponent } from './components/shop/shop.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutoEditarComponent } from './components/produto-editar/produto-editar.component';
import { ProdutoCadastroComponent } from './components/produto-cadastro/produto-cadastro.component';
import { AuthGuardService } from './guards/auth-guard.service'
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent,
    
  },
  { path: 'cadastro', component: CadastroComponent,
  },
  { path: 'shop', component: ShopComponent},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'produto/:id', component: ProdutoComponent},
  { path: 'produtoEdit/:id', component: ProdutoEditarComponent},
  { path: 'produtoCadastro', component: ProdutoCadastroComponent,
   canActivate: [AuthGuardService]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
