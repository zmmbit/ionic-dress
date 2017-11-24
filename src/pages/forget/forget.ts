import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForgetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {

  params={
    usertel:"",
    newpass:'',
    vcode:'',
    sure_pwd:''
  }

  codeParam = {
    fromflag:2,
    usertel:""
  }

  // 验证码倒计时
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 60,
    disable: false
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }

  settime(){
    if(this.verifyCode.countdown == 1){
      this.verifyCode.countdown = 60;
      this.verifyCode.verifyCodeTips="获取验证码";
      this.verifyCode.disable = true;
      return;
    }else{
      this.verifyCode.countdown--;
    }
    this.verifyCode.verifyCodeTips="重新获取("+this.verifyCode.countdown+")";
    setTimeout(()=>{
      this.verifyCode.verifyCodeTips="重新获取("+this.verifyCode.countdown+")";
      this.settime();
    },1000);
  }

  getCode(){
    if(this.codeParam.usertel == ''){
      console.log("请填写手机号...");
      return;
    }
    //倒计时开始
    this.verifyCode.disable = true;
    this.settime();
  }

}
