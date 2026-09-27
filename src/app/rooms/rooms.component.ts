import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = "Hilton Hotel";

  totalRoom = 10;

  toggleflag = false

  room : Room = {
    totalRooms: 20,
    availabelRooms: 10,
    bookedRooms: 5
  };

  roomList: RoomList[] = [{
    RoomNumber : 5,
    RoomType : "Delux rooom",
    amenities: 'air conditioner, Free Wi-Fi, Tv',
    price : 5000,
    photos: "https://imgs.search.brave.com/_KusvhxwgEfmzRUlBDUZem_14rzWFXf0dPhDhKdRDcM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3B1cnBsZS1h/ZXN0aGV0aWMtcm9v/bS05OGR2YjdveWp6/Mm13ZmU3LmpwZw",
    checkintime: new Date ('27-Sep-2026'),
    checkouttime:new Date ('28-Sep-2026'),
  },
{
    RoomNumber : 6,
    RoomType : "Private rooom",
    amenities: 'air conditioner, Free Wi-Fi, Tv',
    price : 10000,
    photos: "https://imgs.search.brave.com/_KusvhxwgEfmzRUlBDUZem_14rzWFXf0dPhDhKdRDcM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3B1cnBsZS1h/ZXN0aGV0aWMtcm9v/bS05OGR2YjdveWp6/Mm13ZmU3LmpwZw",
    checkintime: new Date ('27-Sep-2026'),
    checkouttime:new Date ('29-Sep-2026'),
  },
{
    RoomNumber : 5,
    RoomType : "Delux rooom",
    amenities: 'air conditioner, Free Wi-Fi, Tv',
    price : 5000,
    photos: "https://imgs.search.brave.com/_KusvhxwgEfmzRUlBDUZem_14rzWFXf0dPhDhKdRDcM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL3B1cnBsZS1h/ZXN0aGV0aWMtcm9v/bS05OGR2YjdveWp6/Mm13ZmU3LmpwZw",
    checkintime: new Date ('27-Sep-2026'),
    checkouttime:new Date ('30-Sep-2026'),
  }]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.toggleflag = !this.toggleflag
  }
}
