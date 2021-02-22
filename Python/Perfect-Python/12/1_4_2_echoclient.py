import asyncio


class EchoClient(asyncio.Protocol):
    def __init__(self, message, loop):
        self.mesage = message
        self.loop = loop

    def connection_made(self, transport):
        transport.write(self.mesage.encode("utf-8"))
        self.transport = transport

    def data_received(self, data):
        print(data.decode("utf-8"))
        self.transport.close()

    def connection_lost(self, exc):
        self.loop.stop()


loop = asyncio.get_event_loop()
coro = loop.create_connection(lambda: EchoClient("こんにちわ", loop), "127.0.0.1", 8192)
loop.run_until_complete(coro)
loop.run_forever()
loop.close()
