
module.exports = {
    
    getContextInfo: (m) => {
        return {
            mentionedJid: [m.sender], 
            forwardingScore: 999, 
            isForwarded: true, 
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363388529450317@newsletter', 
                newsletterName: 'Vinkel Support',
                serverMessageId: 143 
            }
        };
    },

    
    sendReply: async (client, m, text) => {
        const contextInfo = module.exports.getContextInfo(m); 
        await client.sendMessage(m.chat, { 
            text: text, 
            contextInfo: contextInfo 
        }, { quoted: m }); 
    },

    
    sendMediaMessage: async (client, m, options) => {
        const contextInfo = module.exports.getContextInfo(m); 
        await client.sendMessage(m.chat, { 
            ...options, 
            contextInfo: contextInfo 
        }, { quoted: m }); 
    }
};
