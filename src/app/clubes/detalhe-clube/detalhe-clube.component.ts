import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-clube',
  templateUrl: './detalhe-clube.component.html',
  styleUrls: ['./detalhe-clube.component.scss']
})
export class DetalheClubeComponent implements OnInit {

  @Input() clubeId: any;

  constructor() { }

  ngOnInit(): void {
  }

}
