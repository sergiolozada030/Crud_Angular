import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

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
    publisher: Publisher.DcComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: '',
  };

  constructor(
    private heroeServie: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.heroeServie
        .getHeroePorId(id)
        .subscribe((resp) => (this.heroe = resp));
    });
  }

  agregarHeroe() {
    if (this.heroe.superHero.trim().length === 0) {
      return;
    }
    this.heroeServie
      .postAgregarHeroe(this.heroe)
      .subscribe((resp) => console.table(this.heroe));
  }
}
