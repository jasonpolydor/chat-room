import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDEFR0Ia9_HN_85pobNcF74mPJhGAvR0OA',
  authDomain: 'chat-room-6a19e.firebaseapp.com',
  databaseURL: 'https://chat-room-6a19e.firebaseio.com',
  projectId: ' chat-room-6a19e',
  storageBucket: 'chat-room-6a19e.appspot.com',
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

