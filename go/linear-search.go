package main

import "fmt"

func linearSearch(array []int, numToFind int) {
	for index, value := range array {
		if value == numToFind {
			fmt.Println("Number found at position", index + 1)
		}
	}
}

func main() {
	var numToFind int
	fmt.Println("Enter a number you want to find: ")
	fmt.Scanln(&numToFind)
	array := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	linearSearch(array, numToFind)
}