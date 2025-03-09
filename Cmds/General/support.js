module.exports = async (context) => {
  const { client, m, url } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
  ╭────────────────
  │ *Wachannel:* https://whatsapp.com/channel/0029VaxZbeSDTkJwBgUb9u3N
    
  │ *wagroup:*  https://chat.whatsapp.com/EqDVC9BGF9k86ZMHdjxY0d

  │ *Telegram:*  https://t.me/Jinwiil Onginjo 
    
  │ *Contact owner:* https://wa.me/message/U5RP3VNFITVQD1

 ╰─────────────────── 
  `;

  // Prepare the image URL
  const image = {
    url: url
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};

