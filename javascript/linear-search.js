const linear_search = (array, num_to_find) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num_to_find) return i;
    };
    return -1;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Element found at index ", linear_search(array, 5));