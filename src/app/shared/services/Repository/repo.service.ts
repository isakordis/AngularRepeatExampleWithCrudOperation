import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EnviromentURLService } from '../enviroment-url.service';
@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor( private http:HttpClient,private envURL:EnviromentURLService) { }


  public getData(route:string){
    return this.http.get(this.createCompleteRoute(route, this.envURL.urlAdress))
  }

  public Create(route:string,body){
    return this.http.post(this.createCompleteRoute(route,this.envURL.urlAdress),body,this.generateHeaders())
  }

  public Update(route:string,body){
    return this.http.put(this.createCompleteRoute(route,this.envURL.urlAdress),body,this.generateHeaders())
  }
  public Delete(route:string,body){
    return this.http.delete(this.createCompleteRoute(route,this.envURL.urlAdress))
  }



  private createCompleteRoute(route:string,envURL:string){
    return `${envURL}/${route}`;
  }

  private generateHeaders(){
    return {
      headers :new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}
