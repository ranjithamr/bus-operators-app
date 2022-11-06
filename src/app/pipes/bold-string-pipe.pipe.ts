import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldStringPipe'
})
export class BoldStringPipe implements PipeTransform {

  transform(plainString: string): string {
    let boldString;
    if (plainString !== 'UNKNOWN') {
      boldString = '<strong>' + plainString.slice(0, 3) + '</strong>' + plainString.slice(3, 7);
    } else {
      boldString = plainString;
    }
    return boldString;
  }

}
