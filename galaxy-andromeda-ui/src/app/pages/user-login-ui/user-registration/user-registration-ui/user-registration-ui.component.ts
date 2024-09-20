import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegistrationService } from 'src/app/services/registration-service/registration.service';
import Swal from 'sweetalert2'

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-registration-ui',
  templateUrl: './user-registration-ui.component.html',
  styleUrls: ['./user-registration-ui.component.css']
})
export class UserRegistrationUiComponent implements OnInit {
  registerForm!: FormGroup;
  fieldRequired: string = "This field is required";
  flag:boolean=false;

  hide = true;
  selectedValue: string = '';
  genders: Gender[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Other', viewValue: 'Other' },
  ];

  constructor(private formBuilder: FormBuilder, private userRegisterService: RegistrationService, private snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.registerForm = this.formBuilder.group(
      {
        'userName': new FormControl(null, [Validators.required]),
        'email': new FormControl(null, [Validators.required, Validators.pattern(emailregex)]),
        'password': new FormControl(null, [Validators.required, this.checkPassword]),
        'firstName': [null],  // Add controls for additional fields
        'lastName': [null],
        'address': [null],
        'phoneNumber': [null],
        'dateOfBirth': [null],
        'gender': [null],
        'termsAccepted': false
      }
    )
  }

  emailErrors() {
    return this.registerForm.get('email')?.hasError('required') ? 'This field is required'
      :
      this.registerForm.get('email')?.hasError('pattern') ? 'Not a valid emailaddress' : ''
  }

  checkPassword(control: any) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  getErrorPassword() {
    return this.registerForm.get('password')?.hasError('required') ? 'This field is required (The password must be at least six characters, one uppercase letter and one number)' :
      this.registerForm.get('password')?.hasError('requirements') ? 'Password needs to be at least six characters, one uppercase letter and one number' : '';
  }
  checkValidation(input: string) {
    const validation = this.registerForm.get(input)?.invalid && (this.registerForm.get(input)?.dirty || this.registerForm.get(input)?.touched)
    return validation;
  }

  //checkbox
  onCheckboxChange() {
    const userData = this.registerForm.value;
    userData.termsAccepted = userData.termsAccepted
  }

  onFormSubmit(formData: FormGroup, formDirective: FormGroupDirective) {
    const userData = this.registerForm.value;
    //progress bar
    this.flag=true;
    //calling register user service
    this.userRegisterService.registerUser(this.registerForm.value).subscribe(
      (data: any) => {
        //if success
        console.log(data);
        this.flag=false;
        Swal.fire('Success Done !!',data.responseMessage, 'success')
      },
      (error) => {
        console.log(error);
        //alert something went wrong
        this.flag=false;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.error.responseMessage,
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    )
    formDirective.resetForm();
    this.registerForm.reset();
  }
}
