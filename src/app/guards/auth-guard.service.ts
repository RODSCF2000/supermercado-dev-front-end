import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate }from '@angular/router'
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../components/login/autenticacao.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private autenticacaoAService: AutenticacaoService) { }

  canActivate(): Observable<boolean> | boolean {

    if(!this.autenticacaoAService.isUsuarioAutenticado && !this.autenticacaoAService.isUsuarioAdm){
      return true;
    }
    alert('Favor realizar o login para verificarmos o acesso adm.')
    this.router.navigate(['login']);
    return false;
  }

}
