import { Component, OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js';
import { ServicioCarta } from 'src/app/services/servicio-carta.service';


@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {

  contadorCroupier: number = 0;
  contadorJugador: number = 0;
  acumCroupier: number = 0;
  acumJugador: number = 0;

  constructor(public cartaData: ServicioCarta) { }

  ngOnInit(): void {
    this.getVictoriasJ();
    this.getVictoriasC();

  }

   datos: ChartData<"pie", number[], string> = {
    labels: ["Jugador", "Croupier"],
    datasets: [
      {
        data: [this.acumJugador, this.acumCroupier]
      },

    ]
  };

  getVictoriasJ(){
    if((this.cartaData.puntajeDealer > 21) || (this.cartaData.puntajeDealer < 22 && this.cartaData.puntajeDealer < this.cartaData.puntajeJugador) || (this.cartaData.puntajeDealer > 21)){
      this.contadorJugador+ 1;
      this.acumJugador+= this.contadorJugador;
    }
    console.log(this.acumJugador);
    return this.acumJugador

  }

  getVictoriasC(){
    if((this.cartaData.puntajeJugador > 21) || (this.cartaData.puntajeDealer < 22 && this.cartaData.puntajeDealer > this.cartaData.puntajeJugador))
    {
      this.contadorCroupier++;
      this.acumCroupier+= this.contadorCroupier;
    }
    console.log(this.acumCroupier);
    return this.acumCroupier
  }


}
