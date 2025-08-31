// angular import
import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';

@Component({
  selector: 'app-nav-right',
  imports: [SharedModule, ChatUserListComponent, ChatMsgComponent],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [style({ transform: 'translateX(100%)' }), animate('300ms ease-in', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(100%)' }))])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('300ms ease-in', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))])
    ])
  ]
})
export class NavRightComponent {
  visibleUserList: boolean;
  chatMessage: boolean;
  friendId!: number;

  themeOptions = [
    { name: 'Light', value: '#ffffff', text: '#263238' },
    { name: 'Dark', value: '#263238', text: '#eceff1' },
    { name: 'Blue', value: '#4099ff', text: '#fff' },
    { name: 'Green', value: '#2ed8b6', text: '#fff' },
    { name: 'Purple', value: '#7759de', text: '#fff' },
    { name: 'Orange', value: '#ffb64d', text: '#fff' },
    { name: 'Red', value: '#ff5370', text: '#fff' },
    { name: 'Teal', value: '#00bcd4', text: '#fff' },
    { name: 'Gray', value: '#748892', text: '#fff' },
    { name: 'Default', value: '#eceff1', text: '#263238' }
  ];
  selectedTheme: string = '#ffffff';

  constructor() {
    this.visibleUserList = false;
    this.chatMessage = false;
    this.applyTheme(this.selectedTheme);
  }

  applyTheme(color: string) {
    document.body.style.background = color;
  }

  onChatToggle(friendID: any) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }
}
