// Supports ES6
// import { create, Whatsapp } from '@wppconnect-team/wppconnect';
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

// Init sales whatsapp bot
wppconnect.create({session: 'sales'}).then((client) => startClient(client));

// Init support whatsapp bot
wppconnect.create({session: 'support'}).then((client) => startSupport(client));