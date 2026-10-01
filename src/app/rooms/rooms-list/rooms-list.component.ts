import { Component, OnInit, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {

  @Input() rooms_lis: RoomList[] = [];

  // @Input() newRoom!: RoomList;
  
  @Output() selectedrooms = new EventEmitter<RoomList>();
  ngOnInit(): void {
    
  }

  selectrooms(rooms:RoomList){
    this.selectedrooms.emit(rooms);
  }
}
