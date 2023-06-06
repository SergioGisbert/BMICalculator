import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  edad = 25;
  peso = 60;
  altura = 170;
  sexo = "masculino";

  constructor(private router: Router) {}

  changeHigth(event: any){
    this.altura=event.target.value;
  }

  masculino(){
    this.sexo = "masculino";
  }
  femenino(){
    this.sexo = "femenino";
  }
  calcBMI(){
    //Calcular
    const BMI = this.peso / Math.pow(this.altura/100,2)
    this.router.navigate(['/resultado',BMI.toFixed(1)]);
  }
}
