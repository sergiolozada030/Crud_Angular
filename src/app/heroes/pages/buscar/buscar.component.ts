import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSelecionado!: Heroe | undefined;
  mostrarError!: boolean;

  constructor(private heroeService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.mostrarError = false;
    this.heroeService.getSugerencias(this.termino).subscribe((resp) => {
      if (resp.length === 0) {
        this.mostrarError = true;
        this.heroes = [];
        return;
      }
      this.mostrarError = false;
      this.heroes = resp;
    });
  }

  opcSelecionada(event: any) {
    if (!event.option.value) {
      this.heroeSelecionado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superHero;

    this.heroeService.getHeroePorId(heroe.id!).subscribe((resp) => {
      this.heroeSelecionado = resp;
    });
  }
}
