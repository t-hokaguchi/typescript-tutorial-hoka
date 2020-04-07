export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'hoka', underTwenty: false };

// How to write index signatures
// { [index: typeForIndex]: typeForValue }

profile.name = 'hoka';
profile.age = 25;
profile.nationality = 'Japan';
