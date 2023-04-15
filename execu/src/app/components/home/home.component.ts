import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _scroller : ViewportScroller) { }

  ngOnInit(): void {
  }

  gotoAbout(){
    this._scroller.scrollToAnchor("about");
  }

  gotoServices(){
    this._scroller.scrollToAnchor("services");
  }

  gotoContact(){
    this._scroller.scrollToAnchor("contact");
  }

  gotoWire(){
    this._scroller.scrollToAnchor("wire");
  }

}
