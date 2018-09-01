import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditTodoListModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-todo-list-modal',
  templateUrl: 'edit-todo-list-modal.html',
})
export class EditTodoListModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditTodoListModalPage');
  }

  dismiss() {
    let data = { data: "Haaa"  };
    this.viewCtrl.dismiss(data);
  }
  

}
