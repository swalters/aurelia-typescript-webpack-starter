// import {DialogController} from 'aurelia-dialog';
import {autoinject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';

@autoinject
export class Prompt {
  private answer;
  private message:string;

  constructor(private controller:DialogController){
    this.controller = controller;
    this.answer = null;

    controller.settings.lock = false;
    controller.settings.centerHorizontalOnly = true;
    controller.settings.ignoreTransitions = true;
  }

  activate(message:string){
    this.message = message;
  }
}