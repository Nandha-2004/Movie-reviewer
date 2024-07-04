import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uhome',
  templateUrl: './uhome.component.html',
  styleUrls: ['./uhome.component.css']
})
export class UhomeComponent {
  videos: string[] = ["assets/jailer.mp4", "assets/one piece.mp4"]; // Update the paths to match your project structure
  currentIndex: number = 0;
  currentVideo: string = "";

  constructor(private router: Router) { }


  ngOnInit(): void {
    this.playVideo();
    setInterval(() => this.playVideo(), 10000);
  }

  playVideo() {
    this.currentIndex = (this.currentIndex + 1) % this.videos.length;
    this.currentVideo = this.videos[this.currentIndex];
    const videoElement = <HTMLVideoElement>document.getElementById('video-player');
    if (videoElement) {
      videoElement.load();
      videoElement.play();
    }
  }
  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl('/home');
  }
  handleClick() {
    this.playVideo();
  }
}
