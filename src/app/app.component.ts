import { Component, HostListener } from '@angular/core';
import { Messages } from './messages';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    if(event.code == "Space") {
      this.addNiceMessage();
    }
  }

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    this.addNiceMessage();
  }
  
  messageTimeout = 2000;
  niceMessages = [];

  addNiceMessage() {
    const id = Math.floor(Math.random() * 1000000000);
    const rightSide = Math.random() >= 0.5;
    const message = Messages[Math.floor(Math.random() * Messages.length)]

    this.niceMessages.push({name: message, id: id, rightSide: rightSide});

    setTimeout(() => this.removeMessage(id), this.messageTimeout);
  }

  removeMessage(id) {
    this.niceMessages = this.niceMessages.filter((message) => {
      return message.id !== id;
    })
  }


}
