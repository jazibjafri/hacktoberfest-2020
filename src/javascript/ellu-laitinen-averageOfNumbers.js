// This function calculates the average of numbers

const numbers = [5, 8, -7, 3, -2, 15, 8, 6];

const averageOfNumbers = () => {
    const sum = numbers.reduce((a, b) => {
        return a + b;
    }, 0);

    const average = sum / numbers.length;

    return average;
}


averageOfNumbers()