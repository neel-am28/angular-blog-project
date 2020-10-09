import { Component, OnInit } from '@angular/core';
import { FetchdataService } from "../../fetchdata.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  category;
  navdata;
  cat_id;
  post_id;
  postData = null;
  getRelatedData = null;

  constructor(
    public serv: FetchdataService,
    public actroute: ActivatedRoute,
    public rout: Router
    ) { }
    
  ngOnInit() {
  }

 /*  getpost(id){
    this.serv.getnavpost(id).subscribe(res=>{
      // console.log(res);
      this.navdata = res;
      this.rout.navigateByUrl('/blog_view/'+this.navdata[0].cat_id+'/'+this.navdata[0].post_id);
    });
  } */
}
