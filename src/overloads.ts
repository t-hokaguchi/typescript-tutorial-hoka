export {};

function double(value: number): number;
function double(value: string): string;

// 型成約は実態の段階でできてるのでany型で十分
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go'));
