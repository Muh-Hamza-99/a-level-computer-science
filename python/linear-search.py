def linear_search(array, num_to_find):
    for i in range(len(array)):
        if array[i] == num_to_find:
            return i
    return -1

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print("Element found at index ", linear_search(array, 5))