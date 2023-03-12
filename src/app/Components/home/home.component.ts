import { Component } from '@angular/core';
import { StoreData } from 'src/app/Models/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  storeInfo:StoreData;
  showImage:boolean;
  constructor(){
    this.showImage=true;
    this.storeInfo=new StoreData('ITI','https://picsum.photos/400/200',['Sql','spring','java'])
  }
  toggleImage(){
    this.showImage=!this.showImage;
  }

}
