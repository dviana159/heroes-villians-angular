import { Injectable } from '@angular/core';
import data from '../../assets/heroes.json';

@Injectable()
export class HeroesService {
    constructor() {}
    
    getHeroes(): Heroe[] {
        return data as Heroe[];
    };
}

export interface Heroe {
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
}