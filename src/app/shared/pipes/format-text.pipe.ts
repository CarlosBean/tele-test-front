import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatText'
})
export class FormatTextPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    if (typeof value === "boolean") {
      value = value ? 'Active' : 'Inactive'
    }

    return value;
  }
}
