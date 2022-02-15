import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;

  constructor(
    private activateRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    //Capturar el id de la ruta

    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  regresar() {
    this.router.navigate(['heroes/listado']);
  }

  goBack() {
    this._location.back();
  }
}
