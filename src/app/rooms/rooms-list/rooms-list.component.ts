import { Component, OnInit, Input, Output, EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { RoomList } from '../rooms';
import type {ColDef} from 'ag-grid-community';

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


  colDefs: ColDef<RoomList>[] = [
    {field: 'RoomNumber', headerName: 'Room Number', width: 140},
    {field: 'RoomTypes', headerName: 'Room Type'},
    {field: 'amenities', headerName: 'Amenities', flex:2},
    {field: 'price', headerName: 'Price',valueFormatter: p => p.value?.toLocaleString('en-IN', {style: 'currency', currency: 'INR'})},
    {field: 'checkintime', headerName: 'Check In Time'},
    {field: 'checkouttime', headerName: 'Check Out Time'},
  ]

  defaultColDef: ColDef = {sortable: true, filter: true, resizable: true};

  onRowClick(event: any){
    this.selectedrooms.emit(event.data);
  }
}
