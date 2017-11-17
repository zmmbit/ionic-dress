import { AppService, AppGlobal } from './../../app/app.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  hasMore:boolean = true;
  selectedItem: any;
  products: any;
  spinner1: boolean = true;
  spinnerIsShow: boolean = true;

  params = {
    pageNo: 1,
    favoritesId: 0,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public appService: AppService) {
    this.selectedItem = this.navParams.get("item");
    this.params.favoritesId = this.selectedItem.FavoritesId;
    //console.log(JSON.stringify(this.selectedItem));

  }

  ionViewDidLoad() {
    this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }

  getFavoritesItems(){
    this.appService.httpGet(AppGlobal.API.getProducts,this.params,rs=>{
      this.products = rs.data;
      this.params.pageNo += 1;
      this.spinner1 = false;
      this.spinnerIsShow = false;
    });
  }

  doInfinite(infiniteScroll){
    if(this.hasMore == false){
      infiniteScroll.complete();
      return;
    }
    this.appService.httpGet(AppGlobal.API.getProducts,this.params,rs=>{
      if(rs.data.length > 0){
        this.products = this.products.concat(rs.data);
        this.params.pageNo += 1;
      }else{
        this.hasMore = false;
        console.log("没有数据了！");
      }
      infiniteScroll.complete();
    });
  }

}
