import { Component } from '@angular/core';
import { Bicicleta } from '../_modelo/bicicleta';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {
    private _cambio_velocidad: number = 0;

    bicicleta : Bicicleta = new Bicicleta("azul","BMX",0,12,3);

    public get cambio_velocidad(): number {
      return this._cambio_velocidad;
    }
    public set cambio_velocidad(value: number) {
      this._cambio_velocidad = value;
    }

    acelera(){
      this.bicicleta.acelerar(this._cambio_velocidad)
    }

    frena(){
      this.bicicleta.frenar(this._cambio_velocidad)
    }
}
