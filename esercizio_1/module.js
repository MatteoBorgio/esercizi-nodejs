function find_next_odd_number(number) {
    if (number % 2 === 0) {
        return number + 1;
    }
    else {
        return number + 2
    }
}

function write_multiplication_table(number) {
    let multiplication_table = [];
    if (number <= 1 || number > 9) {
        console.log("Il numero deve essere compreso tra 1 e 10")
    }
    else {
        for (let i = 1; i <= number; i++) {
            multiplication_table.push(number * i);
        }
    }
    return multiplication_table;
}

function fibonacci(number) {
    let a = 0
    let b = 1
    while (a < number) {
        console.log(a)
        let next = a + b
        a = b
        b = next
    }
}

module.exports = {find_next_odd_number, write_multiplication_table, fibonacci}