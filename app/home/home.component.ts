import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images: string[] = ["assets/kabali.jpg","assets/ironman.jpg","assets/annabelle.jpg","assets/hulk.jpg","assets/petta.jpg"]; // Update the paths to match your project structure
  series: string[] = ["assets/loki.jpg","assets/lucifer.jpg","assets/gameofthrones.jpg","assets/berlin.jpg","assets/lucifer.jpg",]; // Update the paths to match your project structure
  anime: string[] = ["assets/dragonball.jpg","assets/naruto.jpg","assets/slayer.jpeg","assets/one piece.jpeg","assets/naruto.jpg"]; // Update the paths to match your project structure
  currentIndex: number = 0;
  backgroundUrl: string="";
  backgroundUrl1: string="";
  backgroundUrl2: string="";

  constructor() { }

  ngOnInit(): void {
    this.changeImage();
    setInterval(() => this.changeImage(), 2500);
  }

  changeImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.backgroundUrl = `url(${this.images[this.currentIndex]})`;
    this.backgroundUrl1 = `url(${this.series[this.currentIndex]})`;
    this.backgroundUrl2 = `url(${this.anime[this.currentIndex]})`;

  }

  handleClick() {
    this.changeImage();
  }
}
