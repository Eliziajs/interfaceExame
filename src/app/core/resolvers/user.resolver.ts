import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { User } from '../../domain/User';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { CadastroService } from '../services/cadastro.service';

/**export function userResolver(route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) {
  return;
}*/
export const userResolver: ResolveFn<User> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(CadastroService).getExameById(Number(route.paramMap.get('id'))!);
};