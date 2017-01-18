function algorithm(num1, num2) {
    if (num1 == 0) {
        return num2;
    }

    if (num2 == 0) {
        return num1;
    }

    return algorithm(num2, num1 % num2);
}

console.log(algorithm(252, 105));