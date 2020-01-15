import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultadoPost = [];

    if (arg === '' || arg.legnth < 3) {  return value; }

    for(const post of value) {
      if (post.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
      resultadoPost.push(post);
    }
  }
  return resultadoPost;
 }

}
