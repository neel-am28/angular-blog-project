import { Component, OnInit } from '@angular/core';
import { FetchdataService } from "../../fetchdata.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
  cat_id;
  post_id;
  postData = null;
  getRelatedData = null;
  constructor(
    public serv: FetchdataService,
    public rout: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.cat_id = this.rout.snapshot.params['cat_id'];
    this.post_id = this.rout.snapshot.params['post_id'];
    // console.log(this.cat_id + " " + this.post_id);
    this.serv.getsinglepost(this.post_id).subscribe(res =>{
      this.postData = res;
    });
    this.serv.getrelatedposts(this.cat_id, this.post_id).subscribe(res =>{
      this.getRelatedData = res;
    });
  }

  getpost(cat_id, post_id){
    this.serv.getsinglepost(post_id).subscribe(res =>{
      this.postData = res;
    });
    this.serv.getrelatedposts(cat_id, post_id).subscribe(res =>{
      this.getRelatedData = res;
    });
  }

}
