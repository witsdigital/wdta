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
  
  getPat(){
    return this.http.get(this.api+'patologias/getappPatologias').map(res=> res.json())
  }
 

  getPatologias(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'patologias/getpatologias', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}



getPatologiasSintomas(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'patologias/getpatologiassintomas', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}


getPatologiasSintomasTipo(credentials, tipo) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'patologias/getpatologiassintomastipo/'+tipo, JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

getSintomasTipo(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'sintomas/getSintomasTipo', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

getPatologiasTipo(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'patologias/getPatologiasTipo', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}




  getSintomasID(credentials, tipo) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'sintomas/getappSintomasID/'+tipo, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getappSintomasPatologia(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'sintomas/getappsintomaspatologia/', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }



  getArea(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
  
      this.http.post(this.api+'patologias/getArea/', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  
  postDatas(credentials, type) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'apilogin/logarapp', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}



upPass(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'apilogin/updatePass', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

postCadUser(credentials, type) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'apilogin/cadastropp', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}

postPass(credentials) {
  return new Promise((resolve, reject) => {
    let headers = new Headers();

    this.http.post(this.api+'apilogin/recpass', JSON.stringify(credentials), {headers: headers})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });
  });

}




}