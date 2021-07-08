import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
    this.todas();
  }

  todas() {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
          console.table(transferencias);
          this.transferencias = transferencias;
        })
  }

  remover(transferencias: Transferencia){
    this.service.remover(transferencias).subscribe(() => {
      this.todas();
    })
  }


}
