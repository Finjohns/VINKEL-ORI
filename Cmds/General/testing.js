module.exports = async (context) => {
  const { client, m, prefix } = context; // Destructure 'm' and 'prefix' properly

  // Define the message content
  let p = `

  
 button ✅ Testing...
  `;

  // Define the image URL
  let imagePath = 'https://files.catbox.moe/b15b6u.jpg';

  // Define the buttons
  const buttons = [
    {
      buttonId: `${prefix}support`, 
      buttonText: { displayText: "Support" },
    },
    {
      buttonId: `${prefix}repo`, 
      buttonText: { displayText: "Repo" },
    },
    {
      buttonId: `${prefix}ping`, 
      buttonText: { displayText: "Speed" },
    },
  ];

 
  const flowActions = [
    {
      buttonId: "action",
      buttonText: { displayText: "Options" },
      type: 4,
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "MENU",
          sections: [
            {
              title: "Select The Menu",
              highlight_label: "",
              rows: [
                {
                  header: "Vinkel",
                  title: "ORI",
                  description: "Regards VINKEL",
                  id: `${prefix}menu`, 
                },
                {
                  header: "VINKEL-ORI",
                  title: "Appreciation",
                  description: "Regards to the owner",
                  id: `${prefix}speed`, 
                },
              ],
            },
          ],
        }),
      },
      viewOnce: true,
    },
  ];

 
  const buttonMessage = {
    image: { url: imagePath },
    caption: p,
    footer: "© Vinkel\n",
    headerType: 1,
    buttons: buttons,
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363388529450317@newsletter',
        newsletterName: 'Vinkel Support',
      },
      externalAdReply: {
        title: "Vinkel Testing",
        body: "Vinkel",
        thumbnailUrl: `https://files.catbox.moe/b15b6u.jpg`,
        sourceUrl: "https://whatsapp.com/channel/0029VaxZbeSDTkJwBgUb9u3N",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };


  buttonMessage.buttons.push(...flowActions);

  
  await client.sendMessage(m.key.remoteJid, buttonMessage);
};
