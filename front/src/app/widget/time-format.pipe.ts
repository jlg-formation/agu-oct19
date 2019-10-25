import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(duration: number, ...args: any[]): any {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${(seconds + '').padStart(2, '0')}`;
  }

}
