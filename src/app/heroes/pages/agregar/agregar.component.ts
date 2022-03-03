import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

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

  editando: any;

  constructor(
    private heroeServie: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      this.editando = false;
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeServie.getHeroePorId(id)))
      .subscribe((heroe) => {
        this.heroe = heroe;
        this.editando = true;
      });
  }

  guardar() {
    if (this.heroe.superHero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      // Actualizar
      this.heroeServie.putActualizarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['heroes/listado']);
        this.mostrarSnackBar('Informacion Actualizada');
      });
    } else {
      // Crear
      this.heroeServie.postAgregarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['heroes/editar', heroe.id]);
        this.mostrarSnackBar('Heroe Creado Corretamente');
      });
    }
  }

  eliminar() {
    const dialogConfirmar = this.dialog.open(ConfirmarComponent);

    dialogConfirmar.afterClosed().subscribe((resp) => {
      if (!resp) {
        return;
      }

      this.heroeServie.deleteHeroe(this.heroe.id!).subscribe((resp) => {
        this.router.navigate(['heroes/listado']);
      });
    });
    /*  */
  }

  mostrarSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, 'Close!', {
      duration: 2500,
    });
  }
}
