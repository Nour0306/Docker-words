import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Post } from 'src/app/model/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

public storyForm: FormGroup;

constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private _postsService: PostService
  ) {
   this.storyForm = this.formBuilder.group({
        title: new FormControl(''),
        description: new FormControl(''),
        text: new FormControl(''),
        tag: new FormControl(''),
      });
   }

  ngOnInit(): void {

    }

  onSubmit(): void {
    let post = <Post><unknown> {
    title : this.storyForm.controls['title'].value,
    description : this.storyForm.controls['description'].value,
    text : this.storyForm.controls['text'].value,
    tag: this.storyForm.controls['tag'].value,
    date: new Date(),
    }

        console.log('Your order has been submitted', post);

        this._postsService.savePost(post).subscribe((res) => {
          console.log("works");
          this.activeModal.close();
        }, (err) => {
          console.log(err)
        })
  }
}
