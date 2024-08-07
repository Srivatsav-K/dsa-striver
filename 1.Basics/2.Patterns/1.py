def print_square_pattern(n: int):
    for _ in range(n):
        row = ""
        for _ in range(n):
            row += "*"
        print(row)


print_square_pattern(5)
