import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { EditTodoListModalPage } from '../edit-todo-list-modal/edit-todo-list-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // public items = [
  //                   { title: "Todo 1", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
  //                   { title: "Todo 2", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
  //                   { title: "Todo 3", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
  //                   { title: "Todo 4", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
  //                   { title: "Todo 5", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] },
  //                ];


  public itemListTitle = "";

  public activities = [
    { 
      title:"Activity 1" ,
      tasks: [
              { title: "Todo 1", description: "Some dummy text lorem ipsum dulum", status: false , subtasks:[] }
            ],
      tempStr: ""
    }
  ];

  // public activities;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController) {

  }


  showEditTodoList(item, index, activityIndex) {
    
    let modal = this.modalCtrl.create(EditTodoListModalPage,{ data : item });

    modal.onDidDismiss(data => {
      this.activities[activityIndex].tasks[index] = data;
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
            let newActivity = { title: data.activityTitle, tasks: [] , tempStr: ""};
            this.activities.push(newActivity);
          }
        }
      ]
    });

    alert.present();
  }

  showEditTodoPrompt(activityIndex) {
    let alert = this.alertCtrl.create({
      title: "Edit Activity",
      inputs: [{ name: 'activityTitle', placeholder: '* Enter Title' , value: this.activities[activityIndex].title}],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Update',
          handler: data => {
            let activity = data.activityTitle;

            this.activities[activityIndex].title = activity;
            
          }
        }
      ]
    });

    alert.present();
  }


  addNewItemInList(activityIndex) {
    
    let newItem = { title: this.activities[activityIndex].tempStr, description: "", status: false, subtasks:[] };
    
    // this.items.push(newItem);

    this.activities[activityIndex].tasks.push(newItem);
    this.activities[activityIndex].tempStr = "";
  }


  finsihedListItem(activityIndex, i) {
    let finishedItem =  this.activities[activityIndex].tasks[i];

    this.activities[activityIndex].tasks.splice(i,1);

    this.activities[activityIndex].tasks.push(finishedItem);
  }

  deleteActivity(actIndex) {
    this.activities.splice(actIndex, 1);
  }

}
