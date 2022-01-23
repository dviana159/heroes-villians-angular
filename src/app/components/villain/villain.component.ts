import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VillainsService } from 'src/app/services/villains.service';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

  villain: any = {};

  constructor(private _activatedRoute: ActivatedRoute,
    private _villiansServices: VillainsService) {
      this._activatedRoute.params.subscribe(params => {
        this.villain = this._villiansServices.getVillain(params['id']);
      });
    }

  ngOnInit(): void {
  }

}
