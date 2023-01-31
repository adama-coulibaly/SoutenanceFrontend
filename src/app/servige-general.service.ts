import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServigeGeneralService {







  public showValue = new BehaviorSubject<any>(null);

  public showValue$ = this.showValue.asObservable();

  constructor() { }

  
  ionViewDidEnter(){
    
  }
}
