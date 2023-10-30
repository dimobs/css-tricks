def factorial(num): 
    temp = num
    while temp > 0:
        num = num * (num - 1)
        temp -= 1

    return num

print(factorial(5))

