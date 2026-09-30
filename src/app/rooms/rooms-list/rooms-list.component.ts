import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms_lis: RoomList[] = [];
  
  @Output() selectedrooms = new EventEmitter<RoomList>();
  ngOnInit(): void {
    
  }

}
