import { addKeyword, createBot, createFlow, createProvider, MemoryDB } from '@bot-whatsapp/bot';

import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys';

const flowBienvenida = addKeyword('hola').addAnswer('Buenas!! Bienvenido');

const main = async () => {
  const provider = createProvider(BaileysProvider);
  provider.initHttpServer(3003);
  provider.http?.server.post(
    '/send-message',
    handleCtx(async (bot, req, res) => {
      const body = req.body;
      const { mensaje, imagen, numero } = body;
      console.log(body);
      bot.sendMessage(numero, mensaje, {
        media: imagen,
      });
      res.end('Se envio el mensaje');
    })
  );
  await createBot({
    flow: createFlow([flowBienvenida]),
    database: new MemoryDB(),
    provider,
  });
};
main();
