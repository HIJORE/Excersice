import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupdataService } from '../signupdata.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  form:FormGroup;
  constructor(private service: SignupdataService) {

    this.form = new FormGroup({
      username: new FormControl(null, Validators.required),
      pass: new FormControl(null, [Validators.required]),
      conf: new FormControl(null, Validators.required), 
      department: new FormControl(null, Validators.required), 
      region: new FormControl(null, Validators.required)})
  }

  ngOnInit(): void {

   

  }
  onsubmit() {
    if (this.form.valid) {
      this.service.postData(this.form.value).subscribe(
        response => console.log(response),
        error => console.log(error)
      )
    }
    
    
    console.log(this.form.value);


  }
}
