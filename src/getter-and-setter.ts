export {};

// * owner
//   * 所有者
//   * 初期化時に設定
//   * 途中変更不可
//   * 参照可能
// *secretNumber
//   *個人番号
//   * 初期化時に設定
//   * 途中変更可
//   * 参照不可

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('hoka', 1234);
console.log(card.debugPrint());
card.secretNumber = 1212;
console.log(card.debugPrint());
// card.owner = 'tatoro';
console.log(card.owner);
