import asyncio


async def main():
    print("Hello")
    await asyncio.sleep(3)
    print("world")


asyncio.run(main())
