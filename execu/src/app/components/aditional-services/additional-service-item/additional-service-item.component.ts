import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-additional-service-item',
  templateUrl: './additional-service-item.component.html',
  styleUrls: ['./additional-service-item.component.scss']
})
export class AdditionalServiceItemComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  body: string

  constructor() { }

  ngOnInit(): void {
  }

}
