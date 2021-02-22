import asyncio
import aiohttp


async def run():
    async with aiohttp.ClientSession() as session:
        async with session.ws_connect("http://localhost:8080/ws") as ws:
            await ws.send_str("Hello, world!")
            async for msg in ws:
                if msg.type == aiohttp.WSMsgType.TEXT:
                    print(msg.data)
                    await ws.close()
                    break
                elif msg.type == aiohttp.WSMsgType.ERROR:
                    break


loop = asyncio.get_event_loop()
loop.run_until_complete(run())
