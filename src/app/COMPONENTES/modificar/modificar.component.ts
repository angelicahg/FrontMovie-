import { Component, OnInit } from '@angular/core';
import { Movie,MovieService} from '../../SERVICES/movie.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  movie: Movie={
    mov_id:'',
    mov_title:'',
    mov_year:'',
    mov_time: 0,
    mov_lang:'',
    mov_dt_rel:'2021-09-27',
    mov_rel_country:'',
  };
  



  constructor(private MovieService:MovieService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activeRoute.snapshot.params.id;
    console.log('id de entrada:'+id_entrada);

    if(id_entrada){
      this.MovieService.getUnMovie(id_entrada).subscribe(
        (res:any)=>{
          this.movie = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)      
      );
    }

  }
  modificar(){
this.MovieService.editMovie(this.movie.mov_id,this.movie).subscribe(
res=>{
  console.log(res);
},
err=>console.log(err)

);
this.router.navigate(['/inicio']);
}
}
