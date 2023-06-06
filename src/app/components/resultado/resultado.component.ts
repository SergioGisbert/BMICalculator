import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  bmi: number = 0;
  resultado:string = '';
  interpretation:string= '';
  constructor(private route: ActivatedRoute){
    this.bmi=+route.snapshot.paramMap.get('valor')!;

  }

  ngOnInit(): void{
    this.getResult()
  }

  getResult(){
    if(this.bmi >= 25){
      this.resultado='exceso de peso';
      this.interpretation= 'Tienes un peso superior al saludable para su determinada estatura.'

    }else if(this.bmi >= 18.5){
      this.resultado='peso medio';
      this.interpretation= 'Tienes un peso saludable para su determinada estatura.'
      
    }else{
      this.resultado='peso bajo';
      this.interpretation= 'Tienes un peso inferior al saludable para su determinada estatura.'     
    }
  }
}
