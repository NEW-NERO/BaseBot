/**
 * Base By Siputzx
 * Created On 22/2/2024
 * Contact Me on wa.me/6288292024190
 * Supported By Gpt Assistant 
*/

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '6285658939117'
global.nomerowner = ["6285658939117"]

//watermark 
global.packname = 'Di Buat Oleh'
global.author = 'Siputzx -MD'

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
