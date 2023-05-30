import { Component } from '@angular/core';

import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  investiments: Array<Investiments> = [
    {
      name: 'Itau',
      value: 1500
    },
    {
      name: 'Santander',
      value: 3500
    },
    {
      name: 'Nubanck',
      value: 2000
    },
    {
      name: 'Inter',
      value: 1500
    }
  ];

}
