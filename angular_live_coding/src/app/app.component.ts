import { Component } from '@angular/core';

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



  onSubmit(formData:IformData):void {
    console.log(formData);
  }
}
