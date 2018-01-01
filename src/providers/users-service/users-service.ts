import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the UsersServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersServiceProvider {

    public data: any;
    public fireAuth: any;
    public userProfile: any;

    constructor() {
        this.fireAuth = firebase.auth();
        this.userProfile = firebase.database().ref('users');
    }

    loginUserService(email:string, password: string)
    {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    }

    signUpUserService(account: {})
    {
        return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser)=>
        {

            //sign in the user
            this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser)=>
            {
                //successful login, create user profile
                this.userProfile.child(authenticatedUser.uid).set(account);
            });
        });
    }
}
