let outputValue = document.getElementById("outputValue");
let buttons = document.getElementsByTagName("button");
let myOperatorKey = document.getElementsByClassName("myOperatorKey");
let ans = document.getElementById("ans");

ans.addEventListener("click", function() {
  if (outputValue.value.length < 1) {
    document.getElementById("ansDisplay").innerText = "";
  } else {
    document.getElementById("ansDisplay").innerText = "Ans";
  }
});

Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (outputValue.value.length >= 0) {
      document.getElementById("backspace").disabled = false;
      document.getElementById("backspace").style.background = "gray"
      if (
        button.textContent != "=" &&
        button.textContent != "AC" &&
        button.textContent != "×" &&
        button.textContent != "÷" &&
        button.textContent != "√" &&
        button.textContent != "x²" &&
        button.textContent != "%" &&
        button.textContent != "⬅" &&
        button.textContent != "±" &&
        button.textContent != "sin" &&
        button.textContent != "cos" &&
        button.textContent != "tan" &&
        button.textContent != "log" &&
        button.textContent != "ln" &&
        button.textContent != "x^" &&
        button.textContent != "x!" &&
        button.textContent != "π" &&
        button.textContent != "e" &&
        button.textContent != "Rad" &&
        button.textContent != "Ans"
      ) {
        outputValue.value += button.textContent;
      } else if (button.textContent === "=") {
        equals();
      } else if (button.textContent === "AC") {
        clear();
      } else if (button.textContent === "×") {
        multiply();
      } else if (button.textContent === "÷") {
        divide();
      } else if (button.textContent === "±") {
        plusMinus();
      } else if (button.textContent === "⬅") {
        backspace();
      } else if (button.textContent === "%") {
        percent();
      } else if (button.textContent === "π") {
        pi();
      } else if (button.textContent === "x²") {
        square();
      } else if (button.textContent === "√") {
        squareRoot();
      } else if (button.textContent === "sin") {
        sin();
      } else if (button.textContent === "cos") {
        cos();
      } else if (button.textContent === "tan") {
        tan();
      } else if (button.textContent === "log") {
        log();
      } else if (button.textContent === "ln") {
        ln();
      } else if (button.textContent === "x^") {
        exponent();
      } else if (button.textContent === "x!") {
        factorial();
      } else if (button.textContent === "e") {
        exp();
      } else if (button.textContent === "Rad") {
        radians();
      } else if (button.textContent === "Ans") {
        degrees();
      }
    }
  });
});

function syntaxError() {
  if (
    eval(outputValue.value) == SyntaxError ||
    eval(outputValue.value) == ReferenceError ||
    eval(outputValue.value) == TypeError
  ) {
    outputValue.value == "Syntax Error";
  }
}

function equals() {
  if (outputValue.value.indexOf("^") > -1) {
    let base = outputValue.value.slice(0, outputValue.value.indexOf("^"));
    let exponent = outputValue.value.slice(outputValue.value.indexOf("^") + 1);
    outputValue.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    outputValue.value = eval(outputValue.value);
    syntaxError();
  }
}

function clear() {
  outputValue.value = "";
  document.getElementById("ansDisplay").innerText = "";
  document.getElementById("backspace").disabled = true;
  document.getElementById("backspace").style.background = "lightgray"
}

function backspace() {
  if (outputValue.value.length < 1) {
    document.getElementById("backspace").disabled = true;
    document.getElementById("backspace").style.background = "lightgray"
  } else {
    outputValue.value = outputValue.value.substring(0, outputValue.value.length - 1);
    document.getElementById("backspace").disabled = false;
    document.getElementById("backspace").style.background = "gray"
  }
}

function multiply() {
  outputValue.value += "*";
}

function divide() {
  outputValue.value += "/";
}

function plusMinus() {
  if (outputValue.value.charAt(0) === "-") {
    outputValue.value = outputValue.value.slice(1);
  } else {
    outputValue.value = "-" + outputValue.value;
  }
}

function factorial() {
  let number = 1;
  if (outputValue.value === 0) {
    outputValue.value = "1";
  } else if (outputValue.value < 0) {
    outputValue.value = "undefined";
  } else {
    let number = 1;
    for (let i = outputValue.value; i > 0; i--) {
      number *= i;
    }
    outputValue.value = number;
  }
}

function pi() {
  outputValue.value = outputValue.value * Math.PI;
}

function square() {
  outputValue.value = eval(outputValue.value * outputValue.value);
}

function squareRoot() {
  outputValue.value = Math.sqrt(outputValue.value);
}

function percent() {
  outputValue.value = outputValue.value / 100;
}

function sin() {
  outputValue.value = Math.sin(outputValue.value);
}

function cos() {
  outputValue.value = Math.cos(outputValue.value);
}

function tan() {
  outputValue.value = Math.tan(outputValue.value);
}

function log() {
  outputValue.value = Math.log10(outputValue.value);
}

function ln() {
  outputValue.value = Math.log(outputValue.value);
}

function exponent() {
  outputValue.value += "^";
}

function exp() {
  outputValue.value = Math.exp(outputValue.value);
}

function radians() {
  outputValue.value = outputValue.value * (Math.PI / 180);
}

function degrees() {
  outputValue.value = outputValue.value;
}
