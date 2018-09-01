import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { EditTodoListModalPage } from '../edit-todo-list-modal/edit-todo-list-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [
                    { title: "Todo 1", description: "Some dummy text lorem ipsum dulum", status: "pending" },
                    { title: "Todo 2", description: "Some dummy text lorem ipsum dulum", status: "pending" },
                    { title: "Todo 3", description: "Some dummy text lorem ipsum dulum", status: "pending" },
                    { title: "Todo 4", description: "Some dummy text lorem ipsum dulum", status: "pending" },
                    { title: "Todo 5", description: "Some dummy text lorem ipsum dulum", status: "pending" },
                 ];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) {

  }


  showEditTodoList() {
    
    let modal = this.modalCtrl.create(EditTodoListModalPage,{ data : "Hello" });

    modal.onDidDismiss(data => {
      console.log(data);
    });

    modal.present();
  }

  showAddTodoPrompt() {
    let alert = this.alertCtrl.create({
      title: "Add New Activity",
      inputs: [{ name: 'activityTitle', placeholder: '* Enter Title' }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            console.log(data);
          }
        }
      ]
    });

    alert.present();
  }

}
