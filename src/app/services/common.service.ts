import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  names: string[] = [];

  constructor() {
   }


  addToNames (name: string) {
    this.names.push(name);
  }

  readNames () {
    return this.names;
  }
}
