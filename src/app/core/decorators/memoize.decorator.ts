import * as memoizee from 'memoizee';

export function memoize() {
  return function(target: any, key: string, descriptor: PropertyDescriptor) {
    const oldFunction = descriptor.value;
    const newFunction = memoizee(oldFunction);
    descriptor.value = function () {
      return newFunction.apply(this, arguments);
    };
  };
};