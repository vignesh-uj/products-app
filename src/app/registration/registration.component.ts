import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  profileForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.maxLength(10)]], // array
    lastName: [''],
    city: [''],
    phone: ['', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)]],
    email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
    gender: [''],
    overtimeEnabled: [true],
    accomodationEnabled: [false],
    nationality: ['india'],
    address: [''],
    proofOfDocuments: this.formBuilder.group({
      adhaarNumber: [''],
      panNumber: [''],
      passportNumber: ['']
    }),
    interests: this.formBuilder.array([
      this.formBuilder.control('')
    ]),
    iplPoints: this.formBuilder.array([
      this.formBuilder.group({
        teamName: [''],
        point: ['']
      })
    ])
  });

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  
  public get formControls() : any {
    return this.profileForm.controls;
  }

  public get interests() : any {
    return this.profileForm.get('interests') as FormArray;
  }

  public get iplPoints() : any {
    return this.profileForm.get('iplPoints') as FormArray;
  }
  
  onAddInterest () {
    this.interests.push(this.formBuilder.control(''));
  }

  onAddTeam () {
    this.iplPoints.push(this.formBuilder.group({
      teamName: [''],
      point: ['']
    }));
  }

  onSubmit () {
    if (this.profileForm.status === 'INVALID') {
      alert('Your form is invalid, your request will not be processed!!!');
      return;
    }

    const userInfo = this.profileForm.value;
    console.log('The object to be sent to the API is', userInfo);

  }

}
