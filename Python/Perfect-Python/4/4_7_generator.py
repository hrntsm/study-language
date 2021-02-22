from contextlib import contextmanager

@contextmanager
def range_generator(max):
    print("初期化コード")
    try:
        yield range(max)
    finally:
        print("終了コード")


with range_generator(5) as g:
    for i in g:
        print(i)
