// Personクラス
function Person(name) {
  this.name = name;
}
// Personクラスのsayメソッド（文字列を受け取る）
Person.prototype.say = function (message) {
  console.warn(this.name + ': ' + message);
}

// Aliceという名前のPersonクラスのインスタンスがグローバルに公開
var Alice = new Person('アリス');
export { Alice }