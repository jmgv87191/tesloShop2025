import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'productImage'
})

export class productImagePipe implements PipeTransform {
    transform(value: string | string[]): any {
        
    }
}