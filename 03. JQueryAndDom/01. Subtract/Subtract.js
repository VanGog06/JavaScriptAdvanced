function subtract() {
    let firstNumber = parseFloat($('#firstNumber').val());
    let secondNumber = parseFloat($('#secondNumber').val());

    $('#result').text(firstNumber - secondNumber);
}