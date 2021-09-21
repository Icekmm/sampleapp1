//Step 1. Adding logic with JS
//Step 2. Output input in the console 
//Step 3. Adding input validation 
//Step 4. Output input in the screen programmability
//Step 5. Clear input text with Clear button
//Step 6. Sum the total epenses

const reasonInput = document.querySelector('#reason');
const amountInput = document.querySelector('#amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
//Step 4 Output input in the screen
const expensesList = document.querySelector('#expenses-list');
//Step 6 Sum the total epenses
const totalExpensesSum = document.querySelector('#total-expenses');
let totalExpenses = 0;

/*Step 1 Adding logic with JS
confirmBtn.addEventListener('click', () => {
  console.log("It Works!"); 
});

//Step 2 Output input in the console 
confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  console.log(enteredReason, enteredAmount);
});

//Step 3 Adding input validation 
confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  console.log(enteredReason, enteredAmount);
});
*/

//Step 4 Output input in the screen 
confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': P' + enteredAmount;
  expensesList.appendChild(newItem);
  //Step 6
  totalExpenses += +enteredAmount;
  totalExpensesSum.textContent = totalExpenses;

  clear(); //Step 5
});

//Step 5 Clear input text with Clear button
const clear = () =>{
  reasonInput.value ='';
  amountInput.value = '';
}

cancelBtn.addEventListener('click', clear);