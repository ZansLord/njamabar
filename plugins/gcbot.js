//ubah jadi grup mu

let handler = async m => m.reply(`
╭═════════════════
║   𝐆𝐑𝐎𝐔𝐏 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋
║https://chat.whatsapp.com/J8uTa5dCJvoGpJFAJrT4OC
║https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi
╰══════════════════

`.trim()) 
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
