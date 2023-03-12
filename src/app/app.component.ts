import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template:'<h1>{{title}}</h1>',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Company';
  name ='mohamed nagaty abdelhalim badawy';

  sayHello():String{
    return 'welcome'+ this.name; 
  }
}
