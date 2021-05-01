import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callback'
})
export class CallbackPipe implements PipeTransform {
  transform<T, R>(value: T, callback: (value: T, ...rest: any[]) => R, ...rest: any[]): R {
    return callback(value, ...rest);
  }
}

@Pipe({
  name: 'callbackImpure',
  pure: false,
})
export class CallbackImpurePipe implements PipeTransform {
  transform<T, R>(value: T, callback: (value: T, ...rest: any[]) => R, ...rest: any[]): R {
    return callback(value, ...rest);
  }
}

