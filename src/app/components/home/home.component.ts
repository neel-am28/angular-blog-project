import { Component, OnInit } from '@angular/core';
import { FetchdataService } from "../../fetchdata.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allpost = null;
  category;
  catname = "";
  constructor(
    public serv: FetchdataService,
    public actroute: ActivatedRoute,
    public rout: Router
    ) { }
    
  ngOnInit() {
    this.catname = "ALL";
    this.serv.getallposts().subscribe(res =>{
      this.allpost = res;
    });

    this.serv.getcategory().subscribe(res => {
      this.category = res;
    });
  }

  getpost(cat_id, catname){
    this.catname = catname;
    this.serv.getpostbycat(cat_id).subscribe(res=>{
      this.allpost=res;
    });
  }
}
