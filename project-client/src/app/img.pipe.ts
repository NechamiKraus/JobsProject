
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageStylePipe'
})
export class ImageStylePipe implements PipeTransform {
    
  transform(imageUrl: string): any {
    imageUrl = '../../../assets/image (4).png'
    const imageStyle = {
      'width': '20%',
      'border-radius': '8px',
      'height': '20%',
      // 'box-shadow': '0 0 10px rgba(0, 0, 0, 0.3)',
    };

    return {
      'src': imageUrl,
      'style': imageStyle
    };
  }
}
