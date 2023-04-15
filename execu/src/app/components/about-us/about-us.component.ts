import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private _scroller : ViewportScroller) { }

  ngOnInit(): void {
  }

  gotoServices(){
    this._scroller.scrollToAnchor("services");
  }

}
