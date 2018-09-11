import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RemindersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reminders',
  templateUrl: 'reminders.html',
})
export class RemindersPage {

  public reminders:{ title: string, description: string, subtasks:any[], reminderRepeatType: string, date: string, time: string , toggleOn: boolean, textHandler?: string}[] = [
    { title: "Reminder 1", description: "Some Description", subtasks:[{title:"Task 1", status: false}], reminderRepeatType: "Never", date: "", time: "" , toggleOn: false}
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    
  }

  showAddReminderPrompt() {
    let alert = this.alertCtrl.create({
      title: "Add New Reminder",
      inputs: [
                { name: 'title', placeholder: '* Enter Title' }, 
                { name: 'description', placeholder: '* Enter Description' },
                { name: 'repeatType', placeholder: '* Enter Reminder Repeat Type' }
              ],
      buttons: [ { text: 'Cancel'},
                 {
                    text: 'Save',
                    handler: data => {
                      let newReminder = { title: data.title, description: data.description, reminderRepeatType: data.repeatType, subtasks:[], date: "", time: "", toggleOn: false};
                      this.reminders.unshift(newReminder);
                    } 
                  }
              ]
    });

    alert.present();
  }


  toggleContents(reminder) {
    reminder.toggleOn =  !reminder.toggleOn;
  }

  addNewItemInList(reminder) {
    let newSubtask = { title: reminder.textHandler, status: false };
    reminder.subtasks.push(newSubtask);
    reminder.textHandler = "";
  }

  finsihedListItem(subtask, index) {
    let finishedItem = subtask[index];
    subtask.splice(index,1);
    subtask.push(finishedItem);
  }

  showSubtaskEditPrompt(task) {
    let alert = this.alertCtrl.create({
      title: "Edit Subtask",
      inputs: [
                { name: 'title', placeholder: '* Enter Title' , value: task.title}, 
              ],
      buttons: [ { text: 'Cancel'},
                 {
                    text: 'Save',
                    handler: data => {
                      task.title = data.title;
                    } 
                 }
              ]
    });

    alert.present();
  }

  
}
