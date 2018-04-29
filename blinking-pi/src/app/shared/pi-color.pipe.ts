import { Pipe, PipeTransform } from '@angular/core';

import * as tinycolor from 'tinycolor2';

@Pipe({
  name: 'piColor'
})
export class PiColorPipe implements PipeTransform {

  /**
   * Transforms the RGB color with tinycolor to a readable string.
   * Die Deklaration der Methodenparameter angepasst.
   * 
   * @param value to transform
   * @param format transform to (default hex6)
   */
  transform(value: string, format: string = 'hex6'): any {
    return tinycolor(value).toString(format);
  }

}
