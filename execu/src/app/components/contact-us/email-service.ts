import {Injectable} from "@angular/core";
import emailjs from '@emailjs/browser';
import {Dialog} from "@angular/cdk/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface template {
  from_name: string,
  message: string,
  reply_to: string,
}

@Injectable()
export class EmailService {

  constructor(
    private readonly _snackBar: MatSnackBar
  ) {
  }

  SendEmail(name: string | null, message: string | null, email: string | null) {
    emailjs
      .send('service_jyilvrt', 'template_o868e5a', {
        from_name: name,
        message: message,
        email: email,
        reply_to: "gustafdelport@gmail.com",
      }, {
        publicKey: 'Nvv3D_W_xKWq8fO7T',
      })
      .then(
        (response) => {
          this._snackBar.open('Your message was sent we will get back to you soon!', 'Got it', {horizontalPosition: 'center', verticalPosition: 'top'})
        },
        (err) => {
          this._snackBar.open('Your message was not sent please try again alternatively you can use the contact information below.', 'Got it', {horizontalPosition: 'center', verticalPosition: 'top'})
        },
      );
  }
}
