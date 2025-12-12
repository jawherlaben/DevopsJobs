import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  transform(value?: string): string {
    return value ? value : 'assets/images/no-image.png';
  }

}
