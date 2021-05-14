import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useValue: {
            isAuthorized: true,
          },
        },
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true, if user is authorized', () => {
    const authSvc = TestBed.inject(AuthService);
    expect(authSvc.isAuthorized).toBe(true);
    const snapshot = new ActivatedRouteSnapshot();
    const routerState = jasmine.createSpyObj(RouterStateSnapshot, ['toString']);

    const actual = guard.canActivate(snapshot, routerState);

    expect(actual).toBe(true);
  });

  it('should return redirect to unauthorized, if user is not authorized', () => {
    const router = TestBed.inject(Router);
    const createUrlTreeSpy = spyOn(router, 'createUrlTree');
    const urlTree = new UrlTree();
    createUrlTreeSpy.and.returnValue(urlTree);
    const authSvc = TestBed.inject(AuthService);
    authSvc.isAuthorized = false;
    const snapshot = new ActivatedRouteSnapshot();
    const routerState = jasmine.createSpyObj(RouterStateSnapshot, ['toString']);

    const actual = guard.canActivate(snapshot, routerState);

    expect(actual).toBe(urlTree);
    expect(createUrlTreeSpy).toHaveBeenCalledOnceWith(['/unauthorized']);
  });
});
