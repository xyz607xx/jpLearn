import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { File } from "@ionic-native/File";
import { Http } from "@angular/http";
import "rxjs";

import { DetailPage } from "../detail/detail";

@Component({
  selector: 'page-word',
  templateUrl: 'word.html'
})
export class WordPage {

  word: any;

  pronunciations: any;

  constructor(
    public navCtrl: NavController,
    public file: File,
    public http: Http,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.word = navParams.data;
    this.pronunciations = Object.keys(this.word).filter(key => ['remark', 'title'].indexOf(key) === -1);
  }

  nextPage(word, pronunciation) {
    this.navCtrl.push(DetailPage, {
      word, pronunciation
    });
  }

}
