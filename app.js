// Supports ES6
// import { create, Whatsapp } from '@wppconnect-team/wppconnect';
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));





function start(client) {


  client.onAnyMessage((onAnyMessage) => {
    console.log('Mensaje entrando: ', onAnyMessage.body);

  });
  spamMantasTematicas(client)
  spamPoloGratis(client)

  plantilla(client)
  PlantillaConjuntoStitch(client)
  PlantillaMantasTematicas(client)


  spamMantasMascotas(client)
  spamMantasConjuntoStitch(client)
  spamMantasTematicas2(client)
  spamMantasmama(client)



  PlantillaConjuntoStitchLETRA(client)
  PlantillaMantasTematicasLETRA2(client)
  plantillaMascotasLetra(client)
}



function PlantillaMantasTematicasLETRA(client) {
  client.onMessage((message) => {


    if (message.body.toLowerCase() === 'e') {

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/1.jpg',
            '',
            'Liquidación en Mantas de Felpa, supersuaves'
            + '\n' + 'Disponibles dos tamaños, incluye gratis caja temática(Sujeto a disponibilidad de diseño).'
            + '\n' + ''
            + '\n' + 'Precios *solo manta*:'
            + '\n' + ''
            + '\n' + '--Tamaño 100x 80cm : S/.49 A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶59̶'

            + '\n' + '--Tamaño 160x 120cm : S/.59   ̶A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶69̶'

            + '\n' + '--Tamaño 200 x 160 cm : S/.75  ̶A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶89̶'
            + '\n' + ''
            + '\n' + 'Adicionales:'
            + '\n' + '--Diseño a pedido + S/.9'
            + '\n' + '--Agregar Piel de Cordero(Tipo edredon) +S/.29'
            + '\n' + '--Fundas de almohada par S/.29'
            + '\n' + ''
            + '\n' + '𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐭𝐚𝐦𝐛𝐢𝐞𝐧 𝐯𝐞𝐧𝐭𝐚 𝐩𝐨𝐫 𝐦𝐚𝐲𝐨𝐫, somos fabricantes'
            + '\n' + ''
            + '\n' + 'Aceptamos yape, plinn, bcp, interbank, BBVA, CCI y todas las tarjetas de crédito y débito sin costo adicional.  '
            + '\n' + ''
            + '\n' + 'Disponible envío a todo Lima y provincias'

            + '\n' + '(Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + 'No se realiza contraentrega, puede ver nuestros clientes en:'
            + '\n' + 'https://instagram.com/onishaperu'

            + '\n' + ''
            + '\n' + '*Agréganos como contacto y podrás ver ofertas exclusivas todos los días :3*'



          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 4000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/2.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 8000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/3.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 10000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/4.jpg',
            '4.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/5.jpg',
            '1.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 12000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/6.jpg',
            '5.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 13000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/7.jpg',
            '6.jpg',
            'Otro producto que le puede interesar de mascotas :3')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 14000);


      setTimeout(function () {
        client
          .sendText(message.from, '*Si desea otro diseño, solo debe enviar su imagen y se hace! :D*'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 15000);

      setTimeout(function () {
        client
          .sendText(message.from, 'Qué modelo le gusto y en que tamaño busca? (:'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 16000);








    }

  });
}


function PlantillaMantasTematicasLETRA2(client) {
  client.onMessage((message) => {


    if (message.body.toLowerCase() === 'e') {

      setTimeout(function () {
        client
          .sendText(message.from, 'Hola!! Le envio todos los *diseños* de *manta* disponibles 👇🏽'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 5000);






      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/1.jpg',
            '',
            ''



          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 6000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/2.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 7000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/3.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 8000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/4.jpg',
            '4.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 9000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/5.jpg',
            '1.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 10000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/6.jpg',
            '5.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);







      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/info.jpg',
            '',
            'Liquidación en Mantas de Felpa, supersuaves'
            + '\n' + '𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐭𝐚𝐦𝐛𝐢𝐞𝐧 𝐯𝐞𝐧𝐭𝐚 𝐩𝐨𝐫 𝐦𝐚𝐲𝐨𝐫'
            + '\n' + ''
            + '\n' + 'No se realiza contraentrega, puede ver nuestros clientes en:'
            + '\n' + 'https://instagram.com/onishaperu'
            + '\n' + 'https://www.youtube.com/shorts/06L_iJV5SoA'
            + '\n' + ''
            + '\n' + 'Aceptamos yape, plinn, bcp, interbank, BBVA, CCI y todas las tarjetas de crédito y débito sin costo adicional.'
            + '\n' + ''
            + '\n' + '*Agréganos como contacto y podrás ver ofertas exclusivas todos los días :3*'



          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 14000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/pre.jpg',
            '',
            '-'



          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 15000);




      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/7.jpg',
            '6.jpg',
            'Otro producto que le puede interesar de mascotas :3')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 16000);


      setTimeout(function () {
        client
          .sendText(message.from, '*Si desea otro diseño, solo debe enviar su imagen y se hace! :D*'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 17000);


      setTimeout(function () {
        client
          .sendText(message.from, 'Un gusto atenderte :D para realizarle la cotización completa se requiere:'
            + '\n' + '✅Modelo especifico'
            + '\n' + '✅Tamaño'
            + '\n' + '✅Cantidad'
            + '\n' + '✅Destino (Qué parte de Lima u otro destino del Perú)'
            + '\n' + ''
            + '\n' + 'Si tiene una duda me lo puede consultar :D '

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 18000);








    }

  });
}


function PlantillaConjuntoStitchLETRA(client) {
  client.onMessage((message) => {


    if (message.body.toLowerCase() === 'c') {



      setTimeout(function () {
        client
          .sendText(message.from, 'Tambien tenemos los otros modelos a S/.45 c/u :)'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 7000);





      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/2.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 9000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/3.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 10000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/4.jpg',
            '4.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/1.jpg',
            '1.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 12000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/5.jpg',
            '5.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 13000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/6.jpg',
            '6.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 14000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/7.jpg',
            '7.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 15000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/8.jpg',
            '8.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 16000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/co.jpg',
            'co.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 17000);



      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/Conjunto-stitchPrecio.jpg',
            'Conjunto-stitchPrecio.jpg',
            'LANZAMIENTOOO'
            + '\n' + 'Conjunto Stitch short polera top'
            + '\n' + 'Material: Franela '
            + '\n' + 'Manejamos talla chica(para S M) y grande( para L XL) '
            + '\n' + 'Precio S/.79'
            + '\n' + ''
            + '\n' + ''
            + '\n' + 'Tenemos toda las formas de Pago.'
            + '\n' + 'Aceptamos todas las tarjetas sin costo adicional.'
            + '\n' + 'No se realiza contraentrega'
            + '\n' + '-------------'
            + '\n' + 'Disponible envío a todo Lima y provincias'
            + '\n' + '(Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + ''
            + '\n' + 'En Instagram en historias destacadas encontrara nuestros clientes '
            + '\n' + 'https://instagram.com/onishaperu'

            + '\n' + ''
            + '\n' + ''
            + '\n' + '*Agréganos como contacto y podrás ver ofertas exclusivas todos los días :3*'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 4000);






    }

  });
}

function plantillaMascotasLetra(client) {
  client.onMessage((message) => {


    if (message.body.toLowerCase() === 'f') {
      console.log('message: ', message.body);
      console.log('Plantilla MascotaLetra'); //return object success

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MASCOTAS/1.jpg',
            '',
            'Mantas mascota de Felpa Ultra suaves 🐥🐶🐰🦊'
            + '\n' + 'Le envío la información de mantas o almohada personalizadas :)'
            + '\n' + ''
            + '\n' + 'Manta de felpa (80 x 100cm) : S/.55'
            + '\n' + 'Manta de felpa (120 x 160cm) : S/.69'
            + '\n' + 'Manta de felpa (160 x 200cm) : S/.89'
            + '\n' + ''
            + '\n' + 'Almohada (35cm Alto) : S/.39'
            + '\n' + 'Almohada (50cm Alto depende la foto que nos envíe) : S/.49'
            + '\n' + 'Demora estimado fabricación 2 días hábiles'
            + '\n' + ''
            + '\n' + '𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐭𝐚𝐦𝐛𝐢𝐞𝐧 𝐯𝐞𝐧𝐭𝐚 𝐩𝐨𝐫 𝐦𝐚𝐲𝐨𝐫'
            + '\n' + ''
            + '\n' + 'No se realiza contraentrega, puede ver nuestros clientes en:'
            + '\n' + 'https://instagram.com/onishaperu'
            + '\n' + 'Disponible envío a todo Lima y provincias'
            + '\n' + '(Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + 'Aceptamos yape, plinn, bcp, interbank, BBVA, CCI y todas las tarjetas de crédito y débito sin costo adicional.'
            + '\n' + ''
            + '\n' + '*¿En qué parte del Perú se encuentra?*'
          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 6000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MASCOTAS/2.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 8000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MASCOTAS/3.jpg',
            '3.jpg',
            'Le dejo algunos modelos más en video :3 https://www.instagram.com/reel/C5cXpc8tzNA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 10000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MASCOTAS/4.jpg',
            '4.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MASCOTAS/5.jpg',
            '1.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 12000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MASCOTAS/6.jpg',
            '5.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 13000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MASCOTAS/7.jpg',
            '6.jpg',
            'Más diseños')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 14000);










    }
  });




}


function spamPoloGratis(client) {
  client.onAnyMessage((onAnyMessage) => {


    if (onAnyMessage.body === '------') {
      console.log('onAnyMessage: ', onAnyMessage.body);
      console.log('Entro a lectormensaje: '); //return object success
      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/POLO-STITCH-GRATIS.png',
            'VD.jpeg',
            'Hola :D '
            + '\n' + 'si se anima a hacer pedido hoy'
            + '\n' + 'le estare agregando a su pedido'
            + '\n' + 'este producto unisex *GRATIS* a su compra :3 '
            + '\n' + 'Me confirma:)'
          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 6000);
    }
  });
}

function plantilla(client) {
  client.onMessage((message) => {

    if (message.body === 'pruebasss') {
      client
        .sendText(message.from, 'respuesta prueba)'

        )
        .then((result) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}







function PlantillaConjuntoStitch(client) {
  client.onMessage((message) => {


    if (message.body === 'Hola me interesa el conjunto Stitch :)') {



      setTimeout(function () {
        client
          .sendText(message.from, 'Tambien tenemos los otros modelos a S/.45 c/u :)'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 7000);





      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/2.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 9000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/3.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 10000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/4.jpg',
            '4.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/1.jpg',
            '1.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 12000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/5.jpg',
            '5.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 13000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/6.jpg',
            '6.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 14000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/7.jpg',
            '7.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 15000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/8.jpg',
            '8.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 16000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/co.jpg',
            'co.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 17000);



      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/to/Conjunto-stitchPrecio.jpg',
            'Conjunto-stitchPrecio.jpg',
            'LANZAMIENTOOO'
            + '\n' + 'Conjunto Stitch short polera top'
            + '\n' + 'Material: Franela '
            + '\n' + 'Manejamos talla chica(para S M) y grande( para L XL) '
            + '\n' + 'Precio S/.79'
            + '\n' + ''
            + '\n' + ''
            + '\n' + 'Tenemos toda las formas de Pago.'
            + '\n' + 'Aceptamos todas las tarjetas sin costo adicional.'
            + '\n' + 'No se realiza contraentrega'
            + '\n' + '-------------'
            + '\n' + 'Disponible envío a todo Lima y provincias'
            + '\n' + '(Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + ''
            + '\n' + 'En Instagram en historias destacadas encontrara nuestros clientes '
            + '\n' + 'https://instagram.com/onishaperu'

            + '\n' + ''
            + '\n' + ''
            + '\n' + '*Agréganos como contacto y podrás ver ofertas exclusivas todos los días :3*'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 4000);






    }

  });
}

function PlantillaMantasTematicas(client) {
  client.onMessage((message) => {


    if (message.body === 'Hola me interesan las mantas temáticas :D') {

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/1.jpg',
            '',
            'Liquidación en Mantas de Felpa, supersuaves'
            + '\n' + 'Disponibles dos tamaños, incluye gratis caja temática(Sujeto a disponibilidad de diseño).'
            + '\n' + ''
            + '\n' + 'Precios *solo manta*:'
            + '\n' + ''
            + '\n' + '--Tamaño 100x 80cm : S/.49 A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶59̶'

            + '\n' + '--Tamaño 160x 120cm : S/.59   ̶A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶69̶'

            + '\n' + '--Tamaño 200 x 160 cm : S/.75  ̶A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶89̶'
            + '\n' + ''
            + '\n' + 'Adicionales:'
            + '\n' + '--Diseño a pedido + S/.9'
            + '\n' + '--Agregar Piel de Cordero(Tipo edredon) +S/.29'
            + '\n' + '--Fundas de almohada par S/.29'
            + '\n' + ''
            + '\n' + '𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐭𝐚𝐦𝐛𝐢𝐞𝐧 𝐯𝐞𝐧𝐭𝐚 𝐩𝐨𝐫 𝐦𝐚𝐲𝐨𝐫, somos fabricantes'
            + '\n' + ''
            + '\n' + 'Aceptamos yape, plinn, bcp, interbank, BBVA, CCI y todas las tarjetas de crédito y débito sin costo adicional.  '
            + '\n' + ''
            + '\n' + 'Disponible envío a todo Lima y provincias'

            + '\n' + '(Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + 'No se realiza contraentrega, puede ver nuestros clientes en:'
            + '\n' + 'https://instagram.com/onishaperu'

            + '\n' + ''
            + '\n' + '*Agréganos como contacto y podrás ver ofertas exclusivas todos los días :3*'


          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 4000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/2.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 8000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/3.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 10000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/4.jpg',
            '4.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);


      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/5.jpg',
            '1.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 12000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/6.jpg',
            '5.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 13000);

      setTimeout(function () {
        client
          .sendImage(
            message.from,
            'path/MantasPubli/7.jpg',
            '6.jpg',
            'Otro producto que le puede interesar de mascotas :3')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 14000);




      setTimeout(function () {
        client
          .sendText(message.from, '*Si desea otro diseño, solo debe enviar su imagen y se hace! :D*'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 15000);

      setTimeout(function () {
        client
          .sendText(message.from, 'Qué modelo le gusto y en que tamaño busca? (:'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 16000);







    }

  });
}



function spamMantasmama(client) {
  client.onAnyMessage((onAnyMessage) => {


    if (onAnyMessage.body.toLowerCase() === 'ma') {
      console.log('onAnyMessage: ', onAnyMessage.body);
      console.log('SPAM Mantas Mama '); //return object success

      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/mama/1.jpg',
            '',
            'Mantas por el día del a madre :3'
            + '\n' + 'Le envío la información de mantas personalizadas :)'
            + '\n' + ''
            + '\n' + 'Manta de felpa (80 x 100cm) : S/.55'
            + '\n' + 'Manta de felpa (120 x 160cm) : S/.69'
            + '\n' + 'Manta de felpa (160 x 200cm) : S/.89'
            + '\n' + ''
            + '\n' + 'Una manta con su artista favorito(puede enviar su imagen) o un hermoso collage'
            + '\n' + ''
            + '\n' + 'Disponible envío a todo Lima y provincias'
            + '\n' + '(Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + 'Aceptamos yape, plinn, bcp, interbank, BBVA, CCI y todas las tarjetas de crédito y débito sin costo adicional.'
          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 6000);






















    }
  });




}

function spamMantasMascotas(client) {
  client.onAnyMessage((onAnyMessage) => {


    if (onAnyMessage.body.toLowerCase() === 'c') {
      console.log('onAnyMessage: ', onAnyMessage.body);
      console.log('SPAM MASCOTAS '); //return object success

      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MASCOTAS/1.jpg',
            '',
            'Mantas mascota de Felpa Ultra suaves 🐥🐶🐰🦊'
            + '\n' + 'Todo es personalizable'
            + '\n' + ''
            + '\n' + '*PRECIOS - PRECIOS - PRECIOS - PRECIOS *'
            + '\n' + 'Manta de felpa (80 x 100cm) : S/.65'
            + '\n' + 'Manta de felpa (120 x 160cm) : S/.79'
            + '\n' + 'Manta de felpa (160 x 200cm) : S/.99'
            + '\n' + ''
            + '\n' + 'Almohada (35cm Alto) : S/.39'
            + '\n' + 'Almohada (50cm Alto depende la foto que nos envíe) : S/.49'
            + '\n' + '𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐭𝐚𝐦𝐛𝐢𝐞𝐧 𝐯𝐞𝐧𝐭𝐚 𝐩𝐨𝐫 𝐦𝐚𝐲𝐨𝐫'
            + '\n' + ''
            + '\n' + 'Tiempo de envío *estimado* 2 dias habiles'
            
            
            + '\n' + ''
            + '\n' + '✅ *Contamos con RUC, tenemos cuenta a nombre de empresa*'
            + '\n' + ''
            + '\n' + '✅ No realizamos contraentrega'
            + '\n' + ''
            + '\n' + '✅ Disponible envío a todo Lima y provincias'
            + '\n' + ''
            + '\n' + '✅ (Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + '✅ Aceptamos todas las formas de pago, Incluido tarjetas sin comisión adicional'
            + '\n' + ''
            + '\n' + ''
            + '\n' + 'No te olvides agregarnos como contacto para que veas promos y productos exclusivos por historias :3')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 4000);




      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MASCOTAS/2.jpg',
            '5.jpg',
            'Mas diseños :D')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 5000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MASCOTAS/3.jpg',
            '3.jpg',
            '*Fotos de clientes* https://www.instagram.com/reel/C5cXpc8tzNA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 6000);

















    }
  });




}

function spamMantasTematicas(client) {
  client.onAnyMessage((onAnyMessage) => {


    if (onAnyMessage.body.toLowerCase() === 'mt') {
      console.log('onAnyMessage: ', onAnyMessage.body);
      console.log('Entro a lectormensaje: '); //return object success

      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/1.jpg',
            '',
            'Liquidación en Mantas de Felpa, supersuaves'
            + '\n' + 'Disponibles dos tamaños, incluye gratis caja temática(Sujeto a disponibilidad de diseño).'
            + '\n' + ''
            + '\n' + 'Precios *solo manta*:'
            + '\n' + ''
            + '\n' + '--Tamaño 100x 80cm : S/.49 A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶59̶'

            + '\n' + '--Tamaño 160x 120cm : S/.59   ̶A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶69̶'

            + '\n' + '--Tamaño 200 x 160 cm : S/.75  ̶A̶n̶t̶e̶s̶:̶ ̶S̶/̶.̶89̶'
            + '\n' + ''
            + '\n' + 'Adicionales:'
            + '\n' + '--Diseño a pedido + S/.9'
            + '\n' + '--Agregar Piel de Cordero(Tipo edredon) +S/.29'
            + '\n' + '--Fundas de almohada par S/.29'
            + '\n' + ''
            + '\n' + '𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐭𝐚𝐦𝐛𝐢𝐞𝐧 𝐯𝐞𝐧𝐭𝐚 𝐩𝐨𝐫 𝐦𝐚𝐲𝐨𝐫, somos fabricantes'
            + '\n' + ''
            + '\n' + 'Aceptamos yape, plinn, bcp, interbank, BBVA, CCI y todas las tarjetas de crédito y débito sin costo adicional.  '
            + '\n' + ''
            + '\n' + 'Disponible envío a todo Lima y provincias'

            + '\n' + '(Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + 'No se realiza contraentrega, puede ver nuestros clientes en:'
            + '\n' + 'https://instagram.com/onishaperu'

            + '\n' + ''
            + '\n' + '*Agréganos como contacto y podrás ver ofertas exclusivas todos los días :3*'



          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 6000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/2.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 8000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/3.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 10000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/4.jpg',
            '4.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/5.jpg',
            '1.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 12000);

      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/6.jpg',
            '5.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
        console.log("Hola Mundo");
      }, 13000);

      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/7.jpg',
            '6.jpg',
            'Otro producto que le puede interesar de mascotas :3')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 14000);

      setTimeout(function () {
        client
          .sendText(onAnyMessage.to, '*Si desea otro diseño, solo debe enviar su imagen y se hace! :D*'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 15000);


      setTimeout(function () {
        client
          .sendText(onAnyMessage.to, 'Qué modelo le gusto y en que tamaño busca? (:'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 16000);





    }
  });




}

function spamMantasTematicas2(client) {
  client.onAnyMessage((onAnyMessage) => {


    if (onAnyMessage.body.toLowerCase() === 's') {
      console.log('onAnyMessage: ', onAnyMessage.body);
      console.log('Entro a lectormensaje: '); //return object success




      setTimeout(function () {
        client
          .sendText(onAnyMessage.to, 'Hola!! Le envio todos los *diseños* de *manta* disponibles 👇🏽'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 4000);



      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/1.jpg',
            '',
            ''



          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 6000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/2.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 8000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/3.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 10000);
      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/4.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);





      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/info.jpg',
            '',
            'Liquidación en Mantas de Felpa, supersuaves'
            + '\n' + '𝐓𝐞𝐧𝐞𝐦𝐨𝐬 𝐭𝐚𝐦𝐛𝐢𝐞𝐧 𝐯𝐞𝐧𝐭𝐚 𝐩𝐨𝐫 𝐦𝐚𝐲𝐨𝐫'
            + '\n' + ''
            + '\n' + ''
            + '\n' + '✅ *Contamos con RUC, tenemos cuenta a nombre de empresa*'
            + '\n' + ''
            + '\n' + '✅ No realizamos contraentrega'
            + '\n' + ''
            + '\n' + '✅ Disponible envío a todo Lima y provincias'
            + '\n' + ''
            + '\n' + '✅ (Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + '✅ Aceptamos todas las formas de pago, Incluido tarjetas sin comisión adicional'
            + '\n' + ''
            + '\n' + ''
            + '\n' + 'No te olvides agregarnos como contacto para que veas promos y productos exclusivos por historias :3'



          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 14000);


    


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/MantasPubli/7.jpg',
            '6.jpg',
            'Otro producto que le puede interesar de mascotas :3')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 16000);

      setTimeout(function () {
        client
          .sendText(onAnyMessage.to, '*Si desea otro diseño, solo debe enviar su imagen y se hace! :D*'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });


      }, 17000);


    



    }
  });




}


function spamMantasConjuntoStitch(client) {
  client.onAnyMessage((onAnyMessage) => {


    if (onAnyMessage.body.toLowerCase() === 'cs') {
      console.log('onAnyMessage: ', onAnyMessage.body);
      console.log('Entro SAPM CONJUNTO STITCH '); //return object success

      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/Conjunto-stitchPrecio.jpg',
            'Conjunto-stitchPrecio.jpg',
            'LANZAMIENTOOO'
            + '\n' + 'Conjunto Stitch short polera top'
            + '\n' + 'Material: Franela '
            + '\n' + 'Manejamos talla chica(para S M) y grande( para L XL) '
            + '\n' + 'Precio S/.79'
            + '\n' + ''
            + '\n' + ''
            + '\n' + 'Tenemos toda las formas de Pago.'
            + '\n' + 'Aceptamos todas las tarjetas sin costo adicional.'
            + '\n' + 'No se realiza contraentrega'
            + '\n' + '-------------'
            + '\n' + 'Disponible envío a todo Lima y provincias'
            + '\n' + '(Opcional)Tenemos dos puntos de recojo gratis en Lima.'
            + '\n' + ''
            + '\n' + ''
            + '\n' + 'En Instagram en historias destacadas encontrara nuestros clientes '
            + '\n' + 'https://instagram.com/onishaperu'

            + '\n' + ''
            + '\n' + ''
            + '\n' + '*Agréganos como contacto y podrás ver ofertas exclusivas todos los días :3*'



          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 4000);





      setTimeout(function () {
        client
          .sendText(onAnyMessage.to, 'Tambien tenemos los otros modelos a S/.45 c/u :)'

          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 7000);




      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/1.jpg',
            '2.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 8000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/2.jpg',
            '3.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 10000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/3.jpg',
            '4.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 11000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/4.jpg',
            '1.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 12000);

      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/5.jpg',
            '5.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 13000);

      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/6.jpg',
            '6.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 14000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/7.jpg',
            '6.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 16000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/8.jpg',
            '6.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 17000);


      setTimeout(function () {
        client
          .sendImage(
            onAnyMessage.to,
            'path/to/co.jpg',
            '6.jpg',
            '')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });

      }, 18000);







    }
  });




}

function spamBienvenida(client) {
  client.onAnyMessage((onAnyMessage) => {


    if (onAnyMessage.body === 'Hola bienvenid@ a onisha en breve l@ atendemos :)') {
      console.log('onAnyMessage: ', onAnyMessage.body);
      console.log('SPAM BIENVENIDA: '); //return object success
      setTimeout(function () {
        client
          .sendText(
            onAnyMessage.to,

            'Para una atención más rápida puede escoger una *letra* :D'
            + '\n' + ''
            + '\n' + '*C)* Conjuntos pijama'
            + '\n' + ''
            + '\n' + '*E)* Mantas Temáticas(Hp,Stitch,etc)'
            + '\n' + ''
            + '\n' + '*F)* Productos Mascotas(Mantas - Almohadas)'
            + '\n' + ''
            + '\n' + '💬 Por favor, escribe solo la *letra* de tu elección'
          )
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }, 6000);
    }
  });
}
