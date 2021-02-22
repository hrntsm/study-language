import asyncio


async def calc(future, times):
    result = 0
    for i in range(times):
        result += 1
    future.set_result(result)


loop = asyncio.get_event_loop()
f = asyncio.Future()
loop.run_until_complete(calc(f, 10))
result = f.result()
print(result)
