import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  constructor(private heroesServie: HeroesService) {}

  listaDeHeroes: Heroe[] = [];

  ngOnInit(): void {
    this.heroesServie
      .getListaHeroes()
      .subscribe((resp) => (this.listaDeHeroes = resp));
  }
}
