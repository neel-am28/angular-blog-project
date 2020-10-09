import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

const myheader = new HttpHeaders({
  "Content-Type": "application/x-www-form-urlencoded"
});

@Injectable({
  providedIn: 'root'
})
export class FetchdataService {

  constructor(private http: HttpClient) {   }
  // Fetches all posts
  getallposts(){
    return this.http.get("http://localhost/Blog_Project/getallposts.php");
  }
  // Fetches all categories
  getcategory() {
    return this.http.get("http://localhost/Blog_Project/getcategory.php");
  }
  // Fetches a single post with a specific id to view in Blogview component
  getsinglepost(id){
    return this.http.get("http://localhost/Blog_Project/getsinglepost.php?post_id="+id);
  }
  // Fetches all posts of same category
  getrelatedposts(id, post_id){
    return this.http.get("http://localhost/Blog_Project/getrelatedpost.php?cat_id="+id+"&post_id="+post_id);
  }

  getnavpost(id){
    return this.http.get("http://localhost/Blog_Project/getnavpost.php?cat_id="+id);
  }

  getpostbycat(cat_id){
    return this.http.get("http://localhost/Blog_Project/getpostbycat.php?cat_id="+cat_id);
  }
}
