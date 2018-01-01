import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from "../signup/signup";
import { UsersServiceProvider } from '../../providers/users-service/users-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
      UsersServiceProvider
  ]
})
export class LoginPage {

  public email: string;
  public  password: string;

  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController,
              public navCtrl: NavController, public navParams: NavParams, public usersService: UsersServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitLogin() {
    var that = this;
    var loader = this.loadingCtrl.create({
        content:  "Please wait..."
    })
    loader.present();

    this.usersService.loginUserService(this.email, this.password).then(authData => {
      //successful
        loader.dismiss();
        that.navCtrl.setRoot(HomePage);
    }, error => {
      loader.dismiss();
      //unable to login
        let toast = this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
        });
        toast.present();
        that.password = "";//empty password field

    });
  }

  forgotPassword() {

  }

  redirectToSignUp() {
      this.navCtrl.push(SignupPage);
  }
}
