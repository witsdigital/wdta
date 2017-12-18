import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServiceProvider {

api:string = 'http://www.meupainel.com.br/dta/';

  constructor(public http: Http) {

    console.log('Hello ServiceProvider Provider');
  }

  getSintomas(){
    return this.http.get(this.api+'sintomas/getappSintomas').map(res=> res.json())
  }
  
 

  getPatologias(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'patologias/getappatologias', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}




}
