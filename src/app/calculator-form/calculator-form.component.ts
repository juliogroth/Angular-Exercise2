
import { Component, OnInit, VERSION} from '@angular/core';



import { Calculator } from '../calculator';

import { MessageService } from '../message.service';


@Component({
  selector: 'app-calculator-form',
  templateUrl: './calculator-form.component.html',
  styleUrls: ['./calculator-form.component.css']
})
export class CalculatorFormComponent implements OnInit {
  num1=0;
  num2=0;
  result=0;
  public id=0;
  

  operators = ['Sum (+)', 'Subtraction (-)','Multiplication (x)', 'Division (/)']; //no lugar de powers

  model = new Calculator(NaN,NaN,''); 
    
  submitted = false;

  //CORIGIR AQUI - TROQUEI PRIVATE PARA PUBLICO
  constructor(public messageService: MessageService) { } 

  ngOnInit(): void {
  }
  
  onSubmit() {this.submitted = true;
    console.log("onSubmit - submitted: " + this.submitted);
    console.log("onSubmit - num1: " + this.num1);
    console.log("onSubmit - num2: " + this.num2);
    
  }
  

  //CHAMAR messageService AQUI para passar algo ao LOG
  newCalculator(NUMBER1:number, NUMBER2:number, OPERADOR:any) {
    this.num1=NUMBER1;
    this.num2=NUMBER2;
    
    
    console.log("newCalculator - submitted: " + this.submitted);
    console.log("newCalculator - num1: " + this.num1);
    console.log("newCalculator - num2: " + this.num2);
    console.log("Operador selecionado: "+ OPERADOR);
    
    
    switch (OPERADOR) {
      case 'Sum (+)':
        this.result=this.num1 + this.num2;
        OPERADOR='+';
        console.log('Sum result is: ' + this.result);
        break;

      case 'Subtraction (-)':
        this.result=this.num1 - this.num2;
        OPERADOR='-';
        console.log('Subtraction result is: ' + this.result);
        break;
    
      case 'Multiplication (x)':
        this.result=this.num1 * this.num2;
        OPERADOR='x';
        console.log('Multiplication result is: ' + this.result);
        break;
    
      case 'Division (/)':
          this.result=this.num1 / this.num2; //operations 0/0 and Num1/0 already handled by the system itself.
          OPERADOR='/';
          console.log('Division result is: ' + this.result);
          break;
      
      default:
        this.result=NaN;
        OPERADOR="+ Undefined Operator +"
        console.log("Select a correct operator.");
        break;

    }
    
    this.messageService.add(`LogID: (${this.id}) The requested CALC was: ${this.num1} ${OPERADOR} 
    ${this.num2} = ${this.result}`);
    this.id++;
  }

  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  

  

}
