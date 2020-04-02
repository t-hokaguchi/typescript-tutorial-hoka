export {};

// 配列だと型の順序性が保たれない。そういうときはtuple
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham'];
