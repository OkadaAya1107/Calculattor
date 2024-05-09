'use strict';

function appendToDisplay(number) {
  const display = document.querySelector('#display');
  display.value += number;
}

//   // 仮引数 numberを使い表示エリアに動的な数値を表示
//   function appendToDisplay(number) {    
//     document.querySelector('#display').value += number;
//   }

function calculate() {
  const displayValue = document.querySelector('#display').value;
  const result = eval(displayValue);
  document.querySelector('#display').value = result;
}

//   // eval(displayValue) は、その文字列を JavaScript コードとして実行し、計算結果を取得
//   function calculate() {
//     const displayValue = document.querySelector('#display').value;
//     const result = eval(displayValue);
//     document.querySelector('#display').value = result;
//   }

function clearDisplay() {
    document.querySelector('#display').value = '';
}

//   function clearDisplay() {
//     document.querySelector('#display').value = '';
//   }

