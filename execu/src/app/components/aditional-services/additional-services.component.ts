import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aditional-services',
  templateUrl: './additional-services.component.html',
  styleUrls: ['./additional-services.component.scss']
})
export class AdditionalServicesComponent implements OnInit {

  cardOneTitle: string = 'Bending';
  cardOneBody: string = 'Lorem ipsum is dummy text used when you dont know what to say';

  cardTwoTitle: string = 'Boiler-making';
  cardTwoBody: string = 'Lorem ipsum is dummy text used when you dont know what to say';

  cardThreeTitle: string = 'Turning';
  cardThreeBody: string = 'Lorem ipsum is dummy text used when you dont know what to say';

  cardFourTitle: string = 'Milling';
  cardFourBody: string = 'Lorem ipsum is dummy text used when you dont know what to say';

  constructor() { }

  ngOnInit(): void {
  }

}
