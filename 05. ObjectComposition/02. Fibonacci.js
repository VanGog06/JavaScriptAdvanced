function fibonacci(n) {
    let fib = (function() {
        let f0 = 0;
        let f1 = 1;

        return function() {
            let newF = f0 + f1;
            f0 = f1;
            f1 = newF;

            return f0;
        }
    })();

    let fibs = [];

    for (let i = 1; i <= n; i++) {
        fibs.push(fib());
    }

    return fibs;
}

console.log(fibonacci(4));