import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aditional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.scss']
})
export class AdditionalServicesComponent implements OnInit {

  cardOneTitle: string = 'Bending';
  cardOneBody: string = 'Lorem ipsum is dummy text used when you dont know what the fuck to say';

  cardTwoTitle: string = 'Boilermaking';
  cardTwoBody: string = 'Lorem ipsum is dummy text used when you dont know what the fuck to say';

  cardThreeTitle: string = 'Turning';
  cardThreeBody: string = 'Lorem ipsum is dummy text used when you dont know what the fuck to say';

  cardFourTitle: string = 'Milling';
  cardFourBody: string = 'Lorem ipsum is dummy text used when you dont know what the fuck to say';

  constructor() { }

  ngOnInit(): void {
  }

}
