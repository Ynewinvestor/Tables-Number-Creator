const   cmd = require("yargs"),
        optionsCMD={
            number:{
            type:'number',
            alias:'n',
            default:13
        },
        tableof:{
            demand:true,
            alias:'t'
        }
    },
        
        listCMD     =cmd.command('list','Text help',optionsCMD),
        createCMD   =cmd.command('create','Create Text',optionsCMD)
        cmd.help()

module.exports={
    optionsCMD,
    listCMD,
    createCMD
}
