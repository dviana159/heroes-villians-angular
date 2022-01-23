import { Injectable } from '@angular/core';
import data from '../../assets/villains.json';

@Injectable({
  providedIn: 'root'
})
export class VillainsService {

  constructor() { }

  getVillains(): Villain[] {
    return data as Villain[];
  };

  getVillain(idx: number) {
    return data[idx];
  }

  getVillainFilter(filtro: string): Villain[] {
    let villainsDataArr: Villain[] = [];
    for (let index = 0; index < data.length; index++) {
      if (data[index].nombre.toLowerCase().indexOf(filtro) >= 0) {
        let villainData: any = data[index];
        villainData['idx'] = index;
        villainsDataArr.push(villainData);
      }
    }
    return villainsDataArr;
  }

}

export interface Villain {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}