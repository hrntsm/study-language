import argparse
import asyncio
import logging

import aiohttp
from aiohttp import web

logger = logging.getLogger(__name__)


class ChatRoom:
    def __init__(self, loop):
        self.members: web.WebSocketResponse = []
        self.loop = loop

    def join(self, member):
        logger.info("joined %s" % member)
        self.members.append(member)

    def leave(self, member):
        logger.info("left %s" % member)
        self.members.remove(member)

    async def send(self, message):
        logger.info("send message to %d clients" % len(self.members))
        tasks = [self.loop.create_task(ws.send_str(message)) for ws in self.members]
        await asyncio.wait(tasks)


async def websoket_handler(request):
    logger.info("get client")
    ws = web.WebSocketResponse()
    await ws.prepare(request)
    logger.info("wait client data")
    chatroom = request.app["chatroom"]
    chatroom.join(ws)

    try:
        async for msg in ws:
            logger.info("client data")
            if msg.type == aiohttp.WSMsgType.TEXT:
                await chatroom.send(msg.data)
            elif msg.type == aiohttp.WSMsgType.ERROR:
                print("ws connection close with exception %s" % ws.exception())
    finally:
        chatroom.leave(ws)
        logger.info("websocket connection closed")

    return ws


async def startup(app):
    app["chatroom"] = ChatRoom(app.loop)


def main():
    logging.basicConfig(level=logging.INFO)
    parser = argparse.ArgumentParser()
    parser.add_argument("-p", "--port", type=int, default=8080)
    parser.add_argument("--host", default="127.0.0.1")
    args = parser.parse_args()
    app = web.Application()
    app.add_routes([web.get("/ws", websoket_handler)])
    app.on_startup.append(startup)
    web.run_app(app, host=args.host, port=args.port)


if __name__ == "__main__":
    main()
