import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  const log = localStorage.getItem('user') !== null;
  const router = new Router();
  if(!log)
  {
    router.navigateByUrl('/login');
  }
  return log;
};
export const uloginGuard: CanActivateFn = (route, state) => {

  const log = localStorage.getItem('user') !== null;
  const router = new Router();
  if(!log)
  {
    router.navigateByUrl('/ulogin');
  }
  return log;
};