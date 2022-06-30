package main

import "fmt"

func BubbleSort(array[] int) []int {
   for i := 0; i < len(array) - 1; i++ {
      for j := 0; j < len(array) - i - 1; j++ {
         if (array[j] > array[j+1]) {
            array[j], array[j+1] = array[j+1], array[j]
         }
      }
   }
   return array
}
func main() {
   array:= []int{64, 34, 25, 12, 22, 11, 90};
   fmt.Println(BubbleSort(array))
}