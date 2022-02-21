import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
  ];

  heroe: Heroe = {
    superHero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
