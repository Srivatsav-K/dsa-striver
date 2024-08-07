package main

import "fmt"

func printPattern(n int) {
	for i := 0; i < n; i++ {
		var row string = ""
		for j := 0; j < n; j++ {
			row += "*"
		}
		fmt.Println(row)
	}
}

func main() {
	printPattern(3)
}
