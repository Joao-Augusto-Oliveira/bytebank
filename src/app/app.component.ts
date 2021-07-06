import { Component } from '@angular/core';

@Component({
  selector: 'app-rooti',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;

  transferir($event:any) {
    console.log($event)
    this.transferencia = $event;
  }
}
