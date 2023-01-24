import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IformData {
  username: string,
  passwords: {
    password: string,
    confirm_password: string
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_live_coding';

  myFormModel: FormGroup = {};

  constructor() {
    this.myFormModel = new FormGroup({



    });
  }

  onSubmit(formData: IformData): void {
    console.log(formData);
  }

  
}

