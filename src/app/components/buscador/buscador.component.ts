import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { VillainsService } from 'src/app/services/villains.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  filtro: string = "";
  heroes: any[] = [];
  villains: any[] = [];

  constructor(private _activatedRouter: ActivatedRoute,
    private heroesService: HeroesService,
    private villainsService: VillainsService) {
  }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe(params=> {
      this.filtro = params['filtro'];
      this.heroes = this.heroesService.getHeroeFilter(this.filtro);
      this.villains = this.villainsService.getVillainFilter(this.filtro);
    });
  }

}
