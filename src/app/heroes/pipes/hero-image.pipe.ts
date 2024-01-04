import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: Hero): string {

    // Sino existe el id y la imagen del superheroe, devuelve una imagen por defecto
    if(!hero.id && !hero.alt_img){
      return 'assets/no-image.png';
    }

    // Si la imagen existe devuelve la imagen correspondiente al id del superheroe
    if(hero.alt_img) return hero.alt_img;
      return `assets/heroes/${hero.id}.jpg`
  }

}
