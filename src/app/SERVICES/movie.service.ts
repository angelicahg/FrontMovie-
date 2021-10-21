import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url=' https://movie-crud-mean-api.herokuapp.com/api/';
  constructor(private _http: HttpClient, ) { }

//get movie
getMovie():Observable<any>
{
  return this._http.get(`${this.url}`);
}


//get un movie 
getUnMovie(id:any):Observable<any>{
  return this._http.get(`${this.url}/${id}`)
}
//agregar equipo
addMovie(equipo:Movie):Observable<any>
{
  return this._http.post(`${this.url}`, equipo);
}

//eliminar
deleteMovie(id:any){
  return this._http.delete(`${this.url}/${id}`)
};

//modificar equipo
editMovie(id:any, equipo:Movie):Observable<any>{
  return this._http.put(`${this.url}/${id}`, equipo);
}

}


export interface Movie{
mov_id:string;
mov_title?:string;
mov_year?:string;
mov_time?:number;
mov_lang?:string;
mov_dt_rel?:string;
mov_rel_country?:string;
} 

