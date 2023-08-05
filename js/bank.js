// 1. LOGOUT //
document.getElementById('btn-logout').addEventListener('click', function () {
    location.href = 'index.html';
})


// 2. DEPOSIT //
document.getElementById('btn-deposit').addEventListener('click', function () {
    const deposit = document.getElementById('deposit');
    const depositValueString = deposit.value;
    const depositValue = parseFloat(depositValueString)
    deposit.value = '';
    if (isNaN(depositValue)) {
        alert('Please Provide A Deposit Amount')
        return;
    }

    // DEPOSIT BOX ADD NEW DEPOSIT AMOUNT //
    const addDeposit = document.getElementById('deposit-amount');
    const changingAmountString = addDeposit.innerText;
    const changingAmount = parseFloat(changingAmountString)

    const newAdded = changingAmount + depositValue;
    addDeposit.innerText = newAdded;

    // 4. BALANCE ADDED DEPOSIT AMOUNT BALANCE BOX //
    const balance = document.getElementById('balance-total');
    const balanceValueString = balance.innerText;
    const balanceValue = parseFloat(balanceValueString);

    const newAdded1 = balanceValue + depositValue;
    balance.innerText = newAdded1;
})


// 3. WITHDRAW //
/* document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdraw = document.getElementById('withdraw');
    const withdrawValueString = withdraw.value;
    const withdrawValue = parseFloat(withdrawValueString)
    withdraw.value = '';

    // WITHDRAW BOX ADD NEW WITHDRAW AMOUNT //
    const addWithdraw = document.getElementById('withdraw-amount');
    const changingAmount1String = addWithdraw.innerText;
    const changingAmount1 = parseFloat(changingAmount1String)

    const newAdded2 = changingAmount1 + withdrawValue;
    addWithdraw.innerText = newAdded2;
    console.log(changingAmount1)



    // 4. BALANCE CUT DEPOSIT AMOUNT BALANCE BOX //
    const balance = document.getElementById('balance');
    const balanceValueString = balance.innerText;
    const balanceValue = parseFloat(balanceValueString);

    const newAdded3 = balanceValue - withdrawValue;
    balance.innerText = newAdded3;

}) */



