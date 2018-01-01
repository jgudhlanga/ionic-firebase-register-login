import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from "../pages/signup/signup";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { UsersServiceProvider } from '../providers/users-service/users-service';

// Initialize Firebase
export const config = {
    apiKey: "AIzaSyAO405Y9z-2-GVScvpW3TIe48VG3oz85eE",
    authDomain: "ionic-upload-d6366.firebaseapp.com",
    databaseURL: "https://ionic-upload-d6366.firebaseio.com",
    projectId: "ionic-upload-d6366",
    storageBucket: "ionic-upload-d6366.appspot.com",
    messagingSenderId: "934550579372"
};
firebase.initializeApp(config);

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        LoginPage,
        SignupPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        LoginPage,
        SignupPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        UsersServiceProvider
    ]
})
export class AppModule {}
