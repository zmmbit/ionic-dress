import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides:Array<any> = [];
  categories:Array<any> = [];
  products:Array<any> = [];

  spinnerIsShow: boolean = true; //是否显示loading圈

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }

  constructor(public navCtrl: NavController,public appService:AppService ) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }
  //获取幻灯片
  getSlides(){
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.appService.httpGet(AppGlobal.API.getProducts, params, rs => {
      console.debug(rs);
      this.slides = rs.data;
      this.spinnerIsShow = false;
    })
  }
  //获取分类
  getCategories(){
    this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
      console.debug(rs);
      this.categories = rs.data;
    })
  }
  //获取首页推荐列表
  getProducts(){
    this.appService.httpGet(AppGlobal.API.getProducts, this.params, rs => {
      console.debug(rs);
      this.products = rs.data;
    })
  }

  goProductLis(item){
    this.navCtrl.push('ProductListPage',{item:item});
  }


  goDetail(item){
    console.log('go details.....'+JSON.stringify(item));
  }

}
