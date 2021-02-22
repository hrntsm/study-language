import asyncio
from asyncio.log import logger

import aiohttp
from aiohttp import web


async def websoket_handler(request):
    ws = web.WebSocketResponse()
    await ws.prepare(request)

    async for msg in ws:
        logger.info("client data")
        if msg.type == aiohttp.WSMsgType.TEXT:
            await ws.send_str(msg.data)
        elif msg.type == aiohttp.WSMsgType.ERROR:
            print("ws connection close with exception %s" % ws.exception())
    logger.info("websocket connection closed")

    return ws

app = web.Application()
app.add_routes(
    [
        web.get("/ws", websoket_handler),
    ]
)

web.run_app(app, port=8080)
