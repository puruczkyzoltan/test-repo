function average (numbers) {
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    return sum/numbers.length;
};

let array = [1, 2, 3, 4, 5];
let avg = average(array);

console.log(avg);
