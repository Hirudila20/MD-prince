//═══════[© 2022 prince Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['94740423674','94740423674'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['94740423674'] //another owner number
global.premium = ['94740423674'] //premium number
global.pengguna = '𝙱𝙴𝙱𝚈 \ 𝙱𝙾𝙾𝚂' //username
global.botnma = 'MD-𝙿𝚁𝙸𝙽𝙲𝙴' //bot name
global.ownernma = '𝙷𝙸𝚁𝚄 𝙳𝙸𝙻𝙰' //owner name
global.packname = 'MD-prince' //sticker package name
global.author = 'By prince' //sticker author name
global.sessionName = '𝙱𝙰𝙱𝚈 / 𝙱𝙾𝙾𝚂' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature in only for the bot number',
    wait: 'In process...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
