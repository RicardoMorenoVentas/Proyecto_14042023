export class Bicicleta {
  private _color:string;
  private _marca:string;
  private _velocidad:number;
  private _pinyones:number;
  private _platos:number;
  private _electrica:boolean;

  constructor(color = "roja", marca = "BMX", velocidad = 0, pinyones = 12, platos = 3, electrica = false){
    this._color = color;
    this._marca = marca;
    this._velocidad = velocidad;
    this._pinyones = pinyones;
    this._platos = platos;
    this._electrica = electrica;
  }

  get color() : string {
    return this._color;
  }

  set color(color:string){
    this._color = color;
  }

  get marca () : string {
    return this._marca;
  }

  set marca (marca:string){
    this._marca = marca;
  }

  get velocidad() : number {
    return this._velocidad;
  }

  set velocidad(velocidad:number){
    this._velocidad = velocidad;
  }

  get pinyones() : number {
    return this._pinyones;
  }

  set pinyones(pinyones:number){
    this._pinyones = pinyones;
  }

  get platos() : number {
    return this._platos;
  }

  set platos(platos:number){
    this._platos = platos;
  }

  get electica() : boolean {
    return this._electrica;
  }

  set electrica(electrica:boolean){
    this._electrica = electrica;
  }

  acelerar(velocidad:number){
    let velocidad_fin = this._velocidad + velocidad;
    this._velocidad = (velocidad_fin > 120) ? 120 : velocidad_fin;
  }

  frenar(velocidad:number){
    let velocidad_fin = this._velocidad - velocidad;
    this._velocidad = (velocidad_fin < 0) ? 0 : velocidad_fin;
  }
}
