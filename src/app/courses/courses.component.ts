import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private http:HttpClient) { }
  k :any;
  ngOnInit() {
    this.http.get("../../assets/Categories.json").subscribe(data=>{
      this.k = data['categories'];
    })
  }

}
