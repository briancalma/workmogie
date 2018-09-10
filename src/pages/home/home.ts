import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { EditTodoListModalPage } from '../edit-todo-list-modal/edit-todo-list-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [
                    { title: "Todo 1", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
                    { title: "Todo 2", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
                    { title: "Todo 3", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
                    { title: "Todo 4", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
                    { title: "Todo 5", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
                 ];


  public itemListTitle = "";

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) {

  }


  showEditTodoList(item, index) {
    
    let modal = this.modalCtrl.create(EditTodoListModalPage,{ data : item });

    modal.onDidDismiss(data => {
      this.items[index] = data;
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

  addNewItemInList() {
    
    let newItem = { title: this.itemListTitle, description: "", status: false, subtasks:[] };
    
    this.items.push(newItem);

    this.itemListTitle = "";
  }


  finsihedListItem(i) {
    let finishedItem = this.items[i];

    this.items.splice(i,1);

    this.items.push(finishedItem);
  }

}
