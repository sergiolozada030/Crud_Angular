import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  constructor(private heroesServie: HeroesService) {}

  ngOnInit(): void {
    this.heroesServie.getListaHeroes().subscribe((resp) => console.log(resp));
  }
}
