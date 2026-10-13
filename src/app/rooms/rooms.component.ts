import { Component, OnInit, AfterViewInit,ViewChild,AfterViewChecked } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,AfterViewInit,AfterViewChecked {

  hotelName = "Hilton Hotel";

  totalRoom = 10;

  toggleflag = false

  selectedrooms!: RoomList;

  room : Room = {
    totalRooms: 20,
    availabelRooms: 10,
    bookedRooms: 5
  };

  title = "Room List"

  roomList: RoomList[] = [];

  // @ViewChild(HeaderComponent, { static: true }) headerComponent! :HeaderComponent
  // in onInit we can access the headerComponent we get undefined but in ngAfterViewInit we can access the child component headerComponent without static true
  @ViewChild(HeaderComponent) headerComponent! :HeaderComponent

  constructor() { }

  ngOnInit(): void {
    // console.log(this.headerComponent)
    this.roomList = [{
    RoomNumber : 5,
    RoomTypes : "Delux rooom",
    amenities: 'air conditioner, Free Wi-Fi, Tv',
    price : 5000,
    photos: "https://imgs.search.brave.com/_KusvhxwgEfmzRUlBDUZem_14rzWFXf0dPhDhKdRDcM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3B1cnBsZS1h/ZXN0aGV0aWMtcm9v/bS05OGR2YjdveWp6/Mm13ZmU3LmpwZw",
    checkintime: new Date ('27-Sep-2026'),
    checkouttime:new Date ('28-Sep-2026'),
  },
  {
    RoomNumber : 6,
    RoomTypes : "Private rooom",
    amenities: 'air conditioner, Free Wi-Fi, Tv',
    price : 10000,
    photos: "https://imgs.search.brave.com/_KusvhxwgEfmzRUlBDUZem_14rzWFXf0dPhDhKdRDcM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3B1cnBsZS1h/ZXN0aGV0aWMtcm9v/bS05OGR2YjdveWp6/Mm13ZmU3LmpwZw",
    checkintime: new Date ('27-Sep-2026'),
    checkouttime:new Date ('29-Sep-2026'),
  },
  {
    RoomNumber : 7,
    RoomTypes : "Delux rooom",
    amenities: 'air conditioner, Free Wi-Fi, Tv',
    price : 5000,
    photos: "https://imgs.search.brave.com/_KusvhxwgEfmzRUlBDUZem_14rzWFXf0dPhDhKdRDcM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3B1cnBsZS1h/ZXN0aGV0aWMtcm9v/bS05OGR2YjdveWp6/Mm13ZmU3LmpwZw",
    checkintime: new Date ('27-Sep-2026'),
    checkouttime:new Date ('30-Sep-2026'),
  }]
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View" //  here we get some error that was nothing if that error came in development mode then we can ignore that error because in production mode that error will not come 
  }

  ngAfterViewChecked(): void {
  }

  toggle(){
    this.toggleflag = !this.toggleflag
    this.title = "Room List"
  }

  selectroom(data:RoomList){
    this.selectedrooms = data
  }

  addingRoom(){
    const newRoom: RoomList = {
      RoomNumber : 8,
      RoomTypes : "Super Delux rooom",
      amenities: 'air conditioner, Free Wi-Fi, Tv, Massage, Swimming pool',
      price : 10000,
      photos: "https://imgs.search.brave.com/_KusvhxwgEfmzRUlBDUZem_14rzWFXf0dPhDhKdRDcM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3B1cnBsZS1h/ZXN0aGV0aWMtcm9v/bS05OGR2YjdveWp6/Mm13ZmU3LmpwZw",
      checkintime: new Date ('01-Oct-2026'),
      checkouttime:new Date ('03-Oct-2026'),
    };
    // this.roomList.push(newRoom);
    this.roomList = [...this.roomList, newRoom];
  }
}
