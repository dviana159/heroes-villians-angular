import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  filtro: string = "";
  heroes: any[] = [];

  constructor(private _activatedRouter: ActivatedRoute,
    private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe(params=> {
      console.log("Step 2: " + params['filtro']);
      this.filtro = params['filtro'];
      this.heroes = this.heroesService.getHeroeFilter(params['filtro']);
    });
  }

}
