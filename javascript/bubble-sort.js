const bubbleSort = array => {
    let length = array.length;
    for (let i = 1; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            if (array[j] > array[j+1]) [array[j], array[j + 1]] = [array[j + 1], array[j]];
        };
    };
    return array;
};

const array = [64, 34, 25, 12, 22, 11, 90];

console.log(bubbleSort(array));