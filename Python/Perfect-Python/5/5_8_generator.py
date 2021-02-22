def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b


items = []

for v in fib():
    items.append(v)
    if len(items) > 10000:
        break

print(items)
