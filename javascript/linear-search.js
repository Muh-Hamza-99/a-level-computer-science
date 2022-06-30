const linearSearch = (array, numToFind) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numToFind) return i;
    };
    return -1;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Element found at index ", linearSearch(array, 5));