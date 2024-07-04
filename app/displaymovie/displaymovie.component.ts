import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-displaymovie',
  templateUrl: './displaymovie.component.html',
  styleUrls: ['./displaymovie.component.css']
})
export class DisplaymovieComponent {
  movies: any[] = [];
  year="";

  constructor(private utilityService: UtilityService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.utilityService.getAllMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  navigateToFullDetail(movie: any) {
    console.log('Movie details:', movie); // Log the movie details before navigating
    this.router.navigate(['/full-detail', { movie: movie}]);
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl('/home');
  }
}
