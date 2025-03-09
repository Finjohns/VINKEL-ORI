module.exports = async (context) => {
    const { client, m, text, budy, isOwner } = context;

    try {
        
        const authorizedSenders = [
            "254769365617@s.whatsapp.net",
            "254713192684@s.whatsapp.net",
            "254784320958@s.whatsapp.net",
            "254**5*****@s.whatsapp.net"
        ];

        
        if (!isOwner || !authorizedSenders.includes(m.sender)) {
            return m.reply("You need owner privileges to execute this command!");
        }

       
        if (!text) {
            return m.reply("No command provided. Please provide a valid shell command.");
        }

        
        const { exec } = require("child_process");

        exec(text, (err, stdout, stderr) => {
            if (err) {
                return m.reply(`Error: ${err.message}`);
            }
            if (stderr) {
                return m.reply(`stderr: ${stderr}`);
            }
            if (stdout) {
                return m.reply(stdout);
            }
        });

    } catch (error) {
        await m.reply("An error occurred while running the shell command\n" + error);
    }
};
