document.querySelector('.deposit_btn').addEventListener('click', function () {
    const current_deposit = getValueFromInput('#add_deposit_input');
    if (isNaN(current_deposit)) {
        return;
    }
    const previous_deposit = getValueFromTextElement('#deposit_balance');
    const previous_total_balance = getValueFromTextElement('#total_balance');

    const total_deposit = current_deposit + previous_deposit;
    const current_total_balance = current_deposit + previous_total_balance;
    setValue('#deposit_balance', total_deposit);
    setValue('#total_balance', current_total_balance);  
})

document.querySelector('.withdraw_btn').addEventListener('click', function () {
    const current_withdraw = getValueFromInput('#add_withdraw_input');
    if (isNaN(current_withdraw)) {
        return;
    }
    const previous_withdraw = getValueFromTextElement('#withdraw_balance');
    const previous_total_balance = getValueFromTextElement('#total_balance');

    const total_withdraw = current_withdraw + previous_withdraw;
    const current_total_balance = previous_total_balance - current_withdraw;
    setValue('#withdraw_balance', total_withdraw);
    setValue('#total_balance', current_total_balance);
})