import asyncio


class EchoProtocol:
    transport = None

    def connection_made(self, transport):
        self.transport = transport

    def connection_lost(self, exc):
        self.transport = None

    def data_received(self, data):
        self.transport.write(data)

    def eof_received(self):
        self.transport.close()


loop = asyncio.get_event_loop()
coro = loop.create_server(EchoProtocol, '127.0.0.1', 8192)
server = loop.run_until_complete(coro)

try:
    loop.run_forever()
except KeyboardInterrupt:
    pass

server.close()
loop.run_until_complete(server.wait_closed())
loop.close()
