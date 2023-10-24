import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-app',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.css']
})
export class CalculatorAppComponent {

  s : string = "";
  inputValue: string = '0';

  enteredData(data: string){
    try {
      if(data === '='){
        this.s = eval(this.s);
        this.inputValue = this.s;
      }else if(data === 'AC'){
        this.s = "";
        this.inputValue = this.s;
      }else if(data === 'DEL'){
        this.s = this.s.slice(0, -1);
        this.inputValue = this.s;
      }else if(data === '(' || data === ')' || data === '.'){
        this.s += data;
        this.inputValue = this.s;
      }else if(data === 'sqaure'){
        let num = parseFloat(this.s)
        this.s = (num * num).toString();
        this.inputValue = this.s;
      }else if(data === 'root'){
        this.s = Math.sqrt(parseFloat(this.s)).toString();;
        this.inputValue = this.s;
      }else if(data === '1/x'){
        let num = parseFloat(this.s);
        if (num !== 0) {
          this.s = (1 / num).toString();
        } else {
          this.inputValue = "ERR";
        }
      }else {
        this.s += data;
        this.inputValue = this.s;
      }
    } catch (error) {
      this.inputValue = "ERR";
    }
  }
}
