import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wave'
})
export class WavePipe implements PipeTransform {

  transform(value: string, args?: any): any {
      var result: string;
      result = '';
      for(var i = 0; i < value.length; i++){
          if(i % 2 == 0){
              result = result.concat(value[i].toUpperCase());
          } else {
              result = result.concat(value[i].toLowerCase());
          }
      }
    return result;
  }

}
