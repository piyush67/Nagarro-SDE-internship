const allButtons = document.querySelectorAll('button');
const inputBox = document.querySelector('input');

const otherOperator = (operator) => {
  // since del, clr and = have different operations then a normal mathematical opertator
  // and we have to perform a special operation for each of them
  return operator === 'C' || operator === 'DEL' || operator === '=';
};

const clearInput = () => {
  inputBox.value = 0;
};

const popBackInput = () => {
  if (inputBox.value.length === 1) clearInput();
  else {
    inputBox.value = inputBox.value.slice(0, -1);
  }
};

const math_operator = (opr) => {
  return (
    opr === '+' || opr === '-' || opr === '/' || opr === '*' || opr === '%'
  );
};

const decimal = (opr) => {
  return opr === '.';
};

let result_calculated = false;
const evaluateResult = () => {
  try {
    inputBox.value = eval(inputBox.value);
    result_calculated = true;
  } catch (err) {
    clearInput();
    alert('Enter Valid Input');
  }
};
const evaluate = (e) => {
  const operation = e.target.innerText;
  if (!otherOperator(operation)) {
    if (result_calculated && !math_operator(operation) && !decimal(operation)) {
      clearInput();
    }
    if (
      inputBox.value === '0' &&
      !math_operator(operation) &&
      !decimal(operation)
    )
      inputBox.value = operation;
    else inputBox.value += operation;
    result_calculated = false;
  } else {
    result_calculated = false;
    if (operation === 'C') clearInput();
    else if (operation === 'DEL') popBackInput();
    else {
      evaluateResult();
    }
  }
};

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', evaluate);
}

const handleKeyboardEvent = (e) => {
  if (math_operator(e.key) || decimal(e.key)) {
    inputBox.value += e.key;
    result_calculated = false;
  } else if (!isNaN(e.key)) {
    if (result_calculated) clearInput();
    if (inputBox.value === '0') inputBox.value = e.key;
    else inputBox.value += e.key;
  } else {
    result_calculated = false;
    if (e.key === 'Backspace') popBackInput();
    else if (e.code === 'KeyC' || e.key === 'Delete') clearInput();
    else if (e.key === '=' || e.key === 'Enter') evaluateResult();
  }
};

document.addEventListener('keydown', handleKeyboardEvent);
