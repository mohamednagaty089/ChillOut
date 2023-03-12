import { Component } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {

  productlist: Iproduct[];
  category: Icategory[];
  selectitem: number;
  sum: number;
  catnumber: number;
  constructor() {
    this.category = [{ ID: 111, name: 'laptop' }, { ID: 23, name: 'Car' }, { ID: 44, name: 'mobile' }]
    this.productlist = [{
      Id: 12, name: 'lenovo', price: 12000, quantity: 2, imgUrl: 'https://picsum.photos/50', categoryID: 111
    }, {
      Id: 77, name: 'sumsung', price: 10000, quantity: 1, imgUrl: 'https://picsum.photos/50', categoryID: 44
    },
    {
      Id: 77, name: 'sumsung', price: 18000, quantity: 7, imgUrl: 'https://picsum.photos/50', categoryID: 23
    }, {
      Id: 12, name: 'lenovo', price: 12000, quantity: 5, imgUrl: 'https://picsum.photos/50', categoryID: 111
    }, {
      Id: 77, name: 'sumsung', price: 10000, quantity: 4, imgUrl: 'https://picsum.photos/50', categoryID: 44
    },
    {
      Id: 77, name: 'sumsung', price: 18000, quantity: 10, imgUrl: 'https://picsum.photos/50', categoryID: 23
    }]
    this.catnumber = 0;
    this.sum = 0;
    this.selectitem = 0;

  }

  buy(price: number, count: any) {
    this.sum = +count * price;
  }
  onchange() {
    this.selectitem = 111;
  }
  proTruckBy(index:number,product:Iproduct):number{
    return product.Id;
  }

}
