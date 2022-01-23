import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villains-tarjeta',
  templateUrl: './villains-tarjeta.component.html',
  styleUrls: ['./villains-tarjeta.component.css']
})
export class VillainsTarjetaComponent implements OnInit {

  @Input() villain: any = {};
  @Input() index: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  vervillain() {
    this.router.navigate(['/villain', this.index]);
  }

}
