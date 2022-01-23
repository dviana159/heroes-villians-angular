import { Injectable } from '@angular/core';
import data from '../../assets/heroes.json';

@Injectable()
export class HeroesService {
    constructor() {}
    
    getHeroes(): Heroe[] {
        return data as Heroe[];
    };

    getHeroe(idx: number) {
        return data[idx];
    }

    getHeroeFilter(filtro: string): Heroe[] {
        let heroesArr: Heroe[] = [];
        for (let index = 0; index < data.length; index++) {
            if (data[index].nombre.toLowerCase().indexOf(filtro) >= 0) {
                let heroeData: any = data[index];
                heroeData['idx'] = index;
                heroesArr.push(heroeData);
            }
        }
        return heroesArr;
    }
}

export interface Heroe {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
}