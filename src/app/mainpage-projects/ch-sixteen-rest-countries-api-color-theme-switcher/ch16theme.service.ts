import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Ch16themeService {

  private presentThemeSubject = new BehaviorSubject('ch16-theme-light');
  
  presentTheme$: Observable<string> = this.presentThemeSubject.asObservable();

  constructor() { }

  changeTheme(theme) {
    this.presentThemeSubject.next(theme);
  }
}
