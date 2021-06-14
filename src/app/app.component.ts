import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listDate: any[] = [];

  addDate(date: any) {
    this.listDate.push(date);
    console.log(this.addDate);
  }

  eliminarCitaListado(index: number) {
    this.listDate.splice(index, 1);
  }
}
