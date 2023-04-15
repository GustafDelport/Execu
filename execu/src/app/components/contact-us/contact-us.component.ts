import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export const contactForm = new FormGroup<any>({
  fullName: new FormControl(null, [Validators.minLength(2), Validators.maxLength(30)]),
  email: new FormControl(null, Validators.email),
  message: new FormControl(null, [Validators.minLength(10), Validators.maxLength(1000)]),
})

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup = contactForm;

  fullName: string;
  email: string;
  message: string;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onContactUs(){

  }
}
