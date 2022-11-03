import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.css']
})
export class TComponent implements OnInit {

   @Output() parentFunction:EventEmitter<any>=new EventEmitter
  constructor() { }

  ngOnInit(): void {
   

}
}
