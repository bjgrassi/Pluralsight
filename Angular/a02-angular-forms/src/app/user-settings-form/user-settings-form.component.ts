import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subcriptionType: null,
    notes: null
  };

  //Protecting data. EX: user navigates to other page or hit the cancel button
  userSettings: UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(field: NgModel) {
    console.log('onBlur: ', field.valid)
  }

  onSubmit(form: NgForm) {
    console.log("onSubmit: ", form.valid)
  }
}
