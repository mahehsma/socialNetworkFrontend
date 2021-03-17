import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  form: FormGroup
  imagePreview: string;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      content: new FormControl(null),
      description: new FormControl(null),
    });
  }

  onSavePost(){
    if(this.form.invalid) {
      return;
    }
    const postData = new FormData();
    postData.append("title", this.form.value.title);
    postData.append("description", this.form.value.description);
    postData.append("content", this.form.value.content, this.form.value.title);
    const url ="http://localhost:3000/content"
    // const body={title: this.form.value.title, description: this.form.value.description, content: this.form.value.content}
    this.http.post(url, postData).subscribe(result => {
      console.log(result)
    });
    this.form.reset();
  }

  onImagePicked(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({content: file});
    this.form.get('content').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}
