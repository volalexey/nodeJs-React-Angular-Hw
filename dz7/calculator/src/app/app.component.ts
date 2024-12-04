import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numberX: number | null = 0;
  numberY: number | null = 0;
  result: number | null = null;
  sign: string = "?";
  error: string = "";

  clearData(){
    this.sign = '?';
    this.result = null;
    this.error = "";
  }

  inputX(event: any){
    const value = parseInt(event.target.value);
    this.numberX = isNaN(value) ? null : value;
    this.clearData();
  }
  inputY(event: any){
    const value = parseInt(event.target.value);
    this.numberY = isNaN(value) ? null : value;
    this.clearData();
  }
  solveHandler(action: string){
    if (this.numberX == null || this.numberY == null) {
      this.error = 'Both numbers must be valid.';
      this.result = null;
      return;
    }

    switch(action){
      case 'plus':
        this.sign = '+';
        this.result = this.numberX + this.numberY;
        break;
      case 'minus':
        this.sign = '-';
        this.result = this.numberX - this.numberY;
        break;
      case 'mult':
        this.sign = '*';
        this.result = this.numberX * this.numberY;
        break;
      case 'div':
        this.sign = '/';
        if(this.numberY === 0){
          this.error = "dividing by zero";
          break;
        }
        
        this.result = this.numberX / this.numberY;
        break;
      case 'mod':
        this.sign = '%';
        this.result = this.numberX % this.numberY;
        break;
    }
  }
}
