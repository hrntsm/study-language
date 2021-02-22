import asyncio


@asyncio.coroutine
async def hello(name):
    for i in range(10):
        print("Hello, %s, %d" % (name, i))
        yield


loop = asyncio.get_event_loop()
loop.run_until_complete(asyncio.gather(hello("A"), hello("B")))
