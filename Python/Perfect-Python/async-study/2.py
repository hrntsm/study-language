import asyncio
import time


async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)


async def main():
    await say_after(1, "Hello")
    await say_after(2, "world")

asyncio.run(main())
