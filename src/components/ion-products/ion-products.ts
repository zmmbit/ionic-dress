import { NavController } from 'ionic-angular';
import { Component,Input } from '@angular/core';

/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html'
})
export class IonProductsComponent {

  @Input() products: Array<any> = [];

  constructor(public navCtr:NavController) {
    console.log('Hello IonProductsComponent Component');
    
  }
  goDetail(item){
    this.navCtr.push("ProductDetailsPage",{item:item});
    console.debug("go to details......");

  }

}
