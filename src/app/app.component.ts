import { RoomsComponent } from './rooms/rooms.component';
import { Component, ViewChild,AfterViewInit,ViewContainerRef } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'hotelinventoryapp';

  // role = 'Admin'

  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
  }
}
