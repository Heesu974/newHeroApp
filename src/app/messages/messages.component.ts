import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  messages: string[] = [];

  constructor(public messageservice: MessageService) {}

  ngOnInit() {
    this.getMessage();
  }

  getMessage() {
    this.messages = this.messageservice.messages;
  }
  clear() {
    this.messageservice.clear();
    console.log('clear에서 ', this.messages);
    this.getMessage();
  }
}
