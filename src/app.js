const   cmd = require("yargs"),
        fs =    require ('fs'),
        cmdcConfig =require ('../yargs/configApp'),
        {programLogic}   =  require('./diploit'),
        colors  = require('colors')

let commands    = cmd.argv._[0]
    base        = cmdcConfig.createCMD.argv.n,
    tableNumber = cmdcConfig.listCMD.argv.t,
    list =(b,t)=>{
        for (let i = 0; i < b; i++) {
            console.log(`${t} * ${i} = ${t*i}\n`.bgBlue)
        }
    }

switch (commands) {
    case 'list':
        list(base,tableNumber)
        break;
    case 'create':
        programLogic(base,tableNumber).catch(err=>{
            console.log(err)
        })
        break;
    default:
        `Command not found`
        break; 
}
