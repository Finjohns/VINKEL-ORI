const axios = require('axios');

module.exports = async (context) => {
  try {
    const { client, m, text } = context;

    // Define developer contacts with names
    const devContacts = [
      { name: 'Jinwiil', number: '254769365617' },
      { name: 'Vinkel', number: '254713192684' },
      { name: '9++ Finjohns', number: '254784320958' }
    ];

    // Inform about the developer contacts
    await client.sendMessage(m.chat, {
      text: "Below are the developer contacts:",
    }, { quoted: m });

    // Prepare VCards for developer contacts
    const vcards = devContacts.map(contact => (
      'BEGIN:VCARD\n' +
      'VERSION:3.0\n' +
      `FN:${contact.name}\n` +
      'ORG:undefined;\n' +
      `TEL;type=CELL;type=VOICE;waid=${contact.number}:${contact.number}\n` +
      'END:VCARD'
    ));

    // Send message with VCard contacts
    await client.sendMessage(m.chat, {
      contacts: {
        displayName: 'Developers',
        contacts: vcards.map(vcard => ({ vcard })),
      },
    }, { quoted: m });

  } catch (e) {
    console.error("Error in sending VCard contacts:", e);
    m.reply("❌ An error occurred while sending the VCard contacts. Please try again later.");
  }
};
