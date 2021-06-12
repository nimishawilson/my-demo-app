import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grouped-item',
  templateUrl: './grouped-item.component.html',
  styleUrls: ['./grouped-item.component.scss']
})
export class GroupedItemComponent implements OnInit {
@Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
