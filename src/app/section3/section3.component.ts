import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  allPost:any = [];


  constructor(private data:DataService) { 
    this.data.getData().subscribe(r => {
      this.allPost = r;
  console.log(r)
})
  }

  ngOnInit() {

  }

}
