import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, Validators} from "@angular/forms";
import {EmailService} from "./email-service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [EmailService, MatSnackBar]
})
export class ContactUsComponent implements OnInit {

  fullName= new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required]);

  constructor(
    private _emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  onContactUs(){
    if (this.fullName.valid && this.message.valid && this.email.valid){
      this._emailService.SendEmail(this.fullName.value, this.message.value, this.email.value);
    }
    else {
      alert('Make sure the required fields are filled in')
    }
  }
}
