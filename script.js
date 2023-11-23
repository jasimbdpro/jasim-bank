//Login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function (event) {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none'
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block'
})

//Event Handler to Deposit Button
const depositeButton = document.getElementById('deposit-button')
depositeButton.addEventListener('click', function () {
    const inputDeposit = inputToNumber('input-deposit')
    const depositStatus = textToNumber('deposit-status')
    const totalDeposit = inputDeposit + depositStatus;
    document.getElementById('deposit-status').innerText = totalDeposit;

    const balanceStatus = textToNumber('balance-status');
    const addBalanceStatus = balanceStatus + inputDeposit;
    document.getElementById('balance-status').innerText = addBalanceStatus;
    document.getElementById('input-deposit').value = "";
})

//Event Handler to Withdraw Button
const withdrawButton = document.getElementById('withdraw-button')
withdrawButton.addEventListener('click', function () {
    const inputWithdraw = inputToNumber('input-withdraw')
    const withdrawStatus = textToNumber('withdraw-status')
    const totalWithdraw = inputWithdraw + withdrawStatus;
    document.getElementById('withdraw-status').innerText = totalWithdraw;
    document.getElementById('balance-status').innerText = document.getElementById('balance-status').innerText - inputWithdraw;
    document.getElementById('input-withdraw').value = "";
})


//converts input text to number
function inputToNumber(id) {
    inputNumber = parseFloat(document.getElementById(id).value);
    return inputNumber
}

//convert innerText to number
function textToNumber(id) {
    textNumber = parseFloat(document.getElementById(id).innerText);
    return textNumber
}