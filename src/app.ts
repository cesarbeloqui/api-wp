import { addKeyword, createBot, createFlow, createProvider, MemoryDB } from '@bot-whatsapp/bot';

import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys';

const flowBienvenida = addKeyword('hola').addAnswer('Buenas!! Bienvenido');

const main = async () => {
  const provider = createProvider(BaileysProvider);
  provider.initHttpServer(3002);
  provider.http?.server.post(
    '/send-message',
    handleCtx(async (bot, req, res) => {
      const body = req.body;
      const { mensaje, imagen } = body;
      console.log(body);
      bot.sendMessage(5493794142669, mensaje, {
        media: imagen,
      });
      res.end('se envió hola');
    })
  );
  await createBot({
    flow: createFlow([flowBienvenida]),
    database: new MemoryDB(),
    provider,
  });
};
main();
