alert("Terimakasih telah menggunakan Web Kalkulator sebagai media menghitung Anda");

const fungsi = {
  DisplayNumber: '0',
  operator: null,
  AngkaPertama: null,
  InputAngkaKedua: false
}

function updateDisplay() {
  document.querySelector("#DisplayNumber").innerText = fungsi.DisplayNumber;
}

function clearDisplay() {
  fungsi.DisplayNumber = '0';
  fungsi.operator = null;
  fungsi.AngkaPertama = null;
  fungsi.InputAngkaKedua = false;
}

function inputDigit(digit) {
  if (fungsi.DisplayNumber === '0') {
    fungsi.DisplayNumber = digit;
  } else {
    fungsi.DisplayNumber += digit;
  }
}

function negatif() {
  if (fungsi.DisplayNumber === '0') {
    return;
  }
  fungsi.DisplayNumber = fungsi.DisplayNumber * -1;
}

function handleOperator(operator) {
  if (!fungsi.InputAngkaKedua) {
    fungsi.operator = operator;
    fungsi.InputAngkaKedua = true;
    fungsi.AngkaPertama = fungsi.DisplayNumber;

    fungsi.DisplayNumber = '0';
  } else {
    alert("Operator Sudah Ditetapkan");
  }
}

function tambahKurang() {
  if (fungsi.AngkaPertama == null || fungsi.operator == null) {
    alert("Anda belum menetapkan operator");
    return;
  }

  let result = 0;
  if (fungsi.operator === "+") {
    result.parseInt(fungsi.AngkaPertama) + parseInt(fungsi.DisplayNumber);
  } else {
    result.parseInt(fungsi.AngkaPertama) - parseInt(fungsi.DisplayNumber);
  }

  const history {
    AngkaPertama: fungsi.AngkaPertama,
    AngkaKedua: fungsi.DisplayNumber,
    operator: fungsi.operator,
    result: result
  }

  putHistory(history) {
    fungsi.DisplayNumber = result;
    renderHistory();
  }
}

const button = document.querySelectorAll(".button");

for (let button of buttons) {
  button.addEventListener('click', function(event) {
    const target = event.target;

    if (target.classList.contains('clear')) {
      clearDisplay();
      updateDisplay();
      return;
    }

    if (target.classList.contains('negatif')) {
      negatif();
      updateDisplay();
      return;
    }

    if (target.classList.contains('operator')) {
      handleOperator(target.innerText);
      return;
    }

    if (target.classList.contains('equals')) {
      tambahKurang();
      updateDisplay();
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  })
}
