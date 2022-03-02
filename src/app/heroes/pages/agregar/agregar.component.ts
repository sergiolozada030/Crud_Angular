import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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

  tituloPantalla: any;

  constructor(
    private heroeServie: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      this.tituloPantalla = 'Crear ';
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeServie.getHeroePorId(id)))
      .subscribe((heroe) => {
        this.heroe = heroe;
        if (this.heroe.id) {
          this.tituloPantalla = 'Editar ';
        }
      });
  }

  guardar() {
    if (this.heroe.superHero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      // Actualizar
      this.heroeServie
        .putActualizarHeroe(this.heroe)
        .subscribe((heroe) => this.router.navigate(['heroes/listado']));
    } else {
      // Crear
      this.heroeServie
        .postAgregarHeroe(this.heroe)
        .subscribe((heroe) =>
          this.router.navigate(['heroes/editar', heroe.id])
        );
    }
  }
}
