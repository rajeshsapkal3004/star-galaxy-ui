import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormGroupDirective,FormBuilder, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/loginservice/login-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  form!: FormGroup;
  private formSubmitAttempt!: boolean;

  constructor(private fb: FormBuilder,private snack:MatSnackBar,private loginService:LoginServiceService,private router:Router) {}

  loginForm!: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

   isFieldInvalid(field: string) {
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {    
    }
    this.formSubmitAttempt = true;
    this.loginService.generateToken(this.form.value).subscribe(
      (data:any)=>{
        console.log('success-generat token');
        console.log('generated token',data.token);
        
        //calling loginUser method for saving token 
        this.loginService.loginUser(data.token);

        //calling get current User for getting details of current user
        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            console.log('after login response',user);
            //set user to local Storage
            this.loginService.setUser(user);

            //redirect....ADMIN:  admin-dashboard
            //redirect....NORMAL: normal-dashboard
            if(this.loginService.getUserRole()==="ROLE_ADMIN")
            {
              //admin Dashboard
              //window.location.herf='/admin'
              this.router.navigate(['admin']);
              this.loginService.loginStatusSubject.next(true);
            }else if(this.loginService.getUserRole()==='ROLE_USER')
            {
               //normal User Dashboard
                //window.location.href='/user-dashboard';
                this.router.navigate(['/user-dashboard']);
                this.loginService.loginStatusSubject.next(true);
            }else
            {
              this.loginService.logout();
            }
          }
        )
      },
      (error)=>{
        console.log("ERROR  !!");

        this.snack.open('Invalid Details !! Try Again', '', {
          duration:3000,
        })
      }
    )
  }
  
}
