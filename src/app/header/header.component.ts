import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Hive Hotels and Resorts';

  constructor() { }

  ngOnInit(): void {
  }



}
