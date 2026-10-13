import { RoomsComponent } from './rooms/rooms.component';
import { Component, ViewChild,OnInit,AfterViewInit,ViewContainerRef,ElementRef,ViewChildren } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'hotelinventoryapp';

  // role = 'Admin'

  @ViewChild('name', {static: true}) name!: ElementRef;

  @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;

  
  ngOnInit(): void {
    this.name.nativeElement.innerText = "Hotel Inventory App"
  }



  ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent); // we are give dynamically the component to be created in the view container reference vcr
    // componentRef.instance.totalRoom = 50; // we can access the instance of the component and set the value of totalRoom property
  }
}
