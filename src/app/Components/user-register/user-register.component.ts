import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})

export class UserRegisterComponent {


  userRegisterForm:FormGroup

  constructor(private fb: FormBuilder){
    this.userRegisterForm = this.fb.group({
        name: this.fb.control('', [Validators.required]),
        email: this.fb.control('',[ Validators.required, Validators.pattern('^[a-zA-Z]{3,15}@(gmail|yahoo).com$')]),
        password: this.fb.control('', [Validators.required, Validators.pattern('[a-zA-Z]{3,15}')]),
        address: this.fb.group({
          city: this.fb.control(''),
          streetNumber: this.fb.control('')
        }),
        phones: this.fb.array([this.fb.control('')]), 
    })
    // this.userRegisterForm = new FormGroup(
    //   {
    //     name: new FormControl('', [Validators.required]),
    //     email: new FormControl('',[ Validators.required, Validators.pattern('^[a-zA-Z]{3,15}@(gmail|yahoo).com$')]),
    //     password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{3,15}')]),
    //     address: new FormGroup({
    //       city: new FormControl(''),
    //       streetNumber: new FormControl('')
    //     }),
    //     phones: new FormArray([new FormControl('')]),
    //   }
    // )
  }

  get getName(){
    return this.userRegisterForm.get('name')
  }
  get getEmail(){
    return this.userRegisterForm.get('email')
  }
  get getPassword(){
    return this.userRegisterForm.get('password')
  }
  get phones(){
    return this.userRegisterForm.get('phones') as FormArray
  }

  addPhoneNumber(){
    this.phones.push(new FormControl(''))
  }

  removePhone(index:number){
    this.phones.removeAt(index)
  }

  register(){
    
  }

}
