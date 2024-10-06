import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';

export const guardAuthGuard: CanActivateFn = (route, state) => {

  let userAuthService = inject(UserAuthService)
  let router = inject(Router)

  if(userAuthService.isLogedIn()){
    return true;
  }else {
    alert('you must login first...');
    router.navigate(['/login'])
    // return false;
  }

  return true;
};
