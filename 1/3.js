let num = 1;

function factorial(n) {
    let a = [];
    for (let i = 0; i <= n; i++){
        if (num % i == 0) {
            a.push(i)
        }
    }
    return a;
}
console.log(`factorial for ${num} is ${factorial(num)}`);