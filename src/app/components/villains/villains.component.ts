import { Component, OnInit } from '@angular/core';
import { Villain, VillainsService } from '../../services/villains.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {

  villains: Villain[] = [];

  constructor(private _villainService: VillainsService) { }

  ngOnInit(): void {
    this.villains = this._villainService.getVillains();
  }

}
