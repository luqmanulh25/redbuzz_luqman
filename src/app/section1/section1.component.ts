import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {

  banner:any = true;
  video:any = false;

  constructor() {
   }

  ngOnInit(): void {
    
  }

  openVideo(){
    this.banner = false
    this.video = true
    console.log('a')
  }
}
