import { Component, OnInit } from '@angular/core';
import {MovieService, Movie } from '../../SERVICES/movie.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl:'./inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //variable 
  ListarMovie:any=[];

  constructor(private MovieService:MovieService, private router:Router) {
    this.ListarMovie=[];
   }

  ngOnInit(): void {
    this.listarMovie();

  }
  fixDate(date:string){
    const newDate:string[] = date.split('-')
    return [newDate[2].split('T')[0], newDate[1],newDate[0]].join('-')
  }

listarMovie()
{
this.MovieService.getMovie().subscribe(
  res =>{
    console.log(res)
    this.ListarMovie=<any>res;
  },
err => console.log(err)
);
}


eliminar(id:string)
  {
  
     this.MovieService.deleteMovie(id).subscribe(
      res=>{
        console.log('movie eliminado');
        this.listarMovie();
      },
      err=> console.log(err)
      );
      }

  modificar(id:string){
this.router.navigate(['/edit/'+id]);



}
};





