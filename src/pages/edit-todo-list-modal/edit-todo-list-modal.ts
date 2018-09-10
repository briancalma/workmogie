import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

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

  public item;

  public subTaskTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
    this.item = this.navParams.get('data');
  }

  ionViewDidLoad() {
    
  }

  dismiss() {
    // this.item.title = "Barlalarla!";
    let data = this.item;
    this.viewCtrl.dismiss(data);
  }
  
  addNewItemInList() {
    let newItem =  { title: this.subTaskTitle, status: false };
    this.subTaskTitle = "";
    this.item.subtasks.push(newItem);
  }

  finsihedListItem(i) {
    let finishedItem = this.item.subtasks[i];

    this.item.subtasks.splice(i,1);

    this.item.subtasks.push(finishedItem);
  }

  showEditPrompt(i) {
    let alert = this.alertCtrl.create({
      title: "Edit Subtask",
      inputs: [{ name: 'activityTitle', placeholder: '* Enter Title' , value: this.item.subtasks[i].title}],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Update',
          handler: data => {
            // console.log(data);
            this.item.subtasks[i].title = data.activityTitle;
          }
        }
      ]
    });

    alert.present();
  }
}
