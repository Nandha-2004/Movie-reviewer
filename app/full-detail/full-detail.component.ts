import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-full-detail',
  templateUrl: './full-detail.component.html',
  styleUrls: ['./full-detail.component.css']
})
export class FullDetailComponent implements OnInit {
  movieName: string = "";
  movieDetails: any;
  router: any;

  constructor(private utilityService: UtilityService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve movie name from route parameters
    this.route.params.subscribe(params => {
      if (params['movie']) {
        this.movieName = params['movie'];
        this.getMovieDetails(this.movieName);
      }
    });
  }

  getMovieDetails(movieName: string): void {
    this.utilityService.getMovieDetails(movieName).subscribe(
      (data) => {
        this.movieDetails = data;

      },
      (error) => {
        console.error('Error fetching movie details:',this.movieDetails.name);
      }
    );
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl('/home');
  }
}
