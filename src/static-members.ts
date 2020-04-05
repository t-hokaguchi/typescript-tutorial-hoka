export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Taro';
  static lastName: string = 'Hoka';

  static work() {
    return `hey, guys! this is ${this.firstName} ${this.lastName}. are u interested in type? let's dive into type!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
