import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css'],
})
export class ConfirmarComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>) {}

  ngOnInit(): void {}

  eliminar() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close();
  }
}
