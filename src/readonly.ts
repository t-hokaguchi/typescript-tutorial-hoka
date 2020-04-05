export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('hoka');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'aaa';
