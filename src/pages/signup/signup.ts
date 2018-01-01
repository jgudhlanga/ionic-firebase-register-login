import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { UsersServiceProvider } from "../../providers/users-service/users-service";
import { HomePage } from "../home/home";
import * as firebase from 'firebase';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
    providers: [UsersServiceProvider]
})
export class SignupPage {

  public skills: string;
  public email: any;
  public phone: any;
  public password: any;
  public first_name: any;
  public last_name: any;
  public city: any;
  public state: any;
  public isJobSeeker: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: UsersServiceProvider,
              public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  doSignUp()
  {
       var account = {
           first_name: this.first_name,
           last_name: this.last_name,
           skills: this.skills || '',
           email: this.email,
           phone: this.phone || '',
           password: this.password,
           city: this.city || '',
           state: this.state || '',
           isJobSeeker: this.isJobSeeker
       };
       var that = this;

      var loader = this.loadingCtrl.create({
          content:  "Please wait..."
      });
      loader.present();

      this.usersService.signUpUserService(account).then(authData => {
         //successful
         loader.dismiss()
          that.navCtrl.setRoot(HomePage);
      },
          error => {
            loader.dismiss();
            //unable to login
              let toast = this.toastCtrl.create({
                  message: error,
                  duration: 3000,
                  position: 'top'
              });
              toast.present();
              that.password="";//empty the password
          });
  }
}
