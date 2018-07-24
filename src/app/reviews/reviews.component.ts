import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gem-model';
import { ReviewModel } from '../review-model';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { AvatarService } from '../avatar.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    @Input()
    gem: GemModel;

    newReview: ReviewModel;

  constructor(private avatarService: AvatarService, private http: HttpClient) { }
    // Marking the argument as private is the same thing as declaring a property:
//	_avatarService: AvatarService;
//
//	constructor(avatarService: AvatarService){
//		this._avatarService = avatarService
//	}

  ngOnInit() {
      this.newReview = {
          id: -1,
          createddate: "",
          rating: null,
          author: "",
          body: ""
      }
  }

    submitClicked(){
        if (!this.gem.reviews){
            this.gem.reviews = [];
        }

        this.http.post('http://localhost:52631/gem/addreview', { body: this.newReview.body, author: this.newReview.author, rating: this.newReview.rating}).subscribe((x) => { console.log(x)});

        this.gem.reviews.push(this.newReview);
        this.newReview = {
          id: -1,
          createddate: "",
          rating: null,
          author: "",
          body: ""
        }
    }

}
