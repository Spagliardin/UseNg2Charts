import { GraficasService } from './../../services/graficas.service';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit{


  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: [
      'blue',
      'pink',
      'orange',
      'brown',
      'purple'
    ] }
  ]

  constructor( private GraficasService: GraficasService) { }
  ngOnInit(): void {
    // this.GraficasService.getUsuariosRedesSociales()
    // .subscribe( res => {
    //   const labels = Object.keys ( res )
    //   const values = Object.values( res )
    //   this.doughnutChartLabels = labels
    //   this.doughnutChartData.push( values )
    // })
      
    this.GraficasService.getUsers()
    .subscribe( ({labels, values}) => {
      this.doughnutChartLabels = labels
        this.doughnutChartData.push( values )
    } )
  }

  

}
