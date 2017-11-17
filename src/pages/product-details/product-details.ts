import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  selectItem:any;
  imgs:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectItem = navParams.get("item");
    if(this.selectItem.SmallImages){
      this.imgs = this.selectItem.SmallImages;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
    console.log(JSON.stringify(this.selectItem));
  }

  goBuy() {
    let options = {
        statusbar: {
            color: '#f8285c'
        },
        toolbar: {
            height: 44,
            color: '#f8285c'
        },
        title: {
            color: '#ffffffff',
            showPageTitle: true
        },
        backButton: {
            image: 'back',
            imagePressed: 'back_pressed',
            align: 'left',
            event: 'backPressed'
        },
        backButtonCanClose: true
    };
    //打开安装的app浏览器插件，跳转链接
    //new ThemeableBrowser(this.selectItem.ClickUrl, '_blank', options)
}

}
