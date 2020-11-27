const   fs      =    require ('fs')

let programLogic=(base,tableNumber)=>{
    let content='',
        totalContent=''
    return new Promise((resolve,reject)=>{
        if ((typeof base) && (typeof tableNumber) === 'number'){
            for (let i = 0; i < base; i++) {
                content=`${tableNumber} * ${i} = ${tableNumber*i}\n`
                totalContent+=content
            }
            resolve(totalContent)
            fs.writeFile(`C:/Users/USUARIO/Desktop/TableNumber-${tableNumber}.txt`,totalContent,err=>{
                if(!err){
                    reject (`Nothing Content`)
                }else{
                    resolve(`Created Table succesfully`)
                }
            })
        }else{
            reject(`Base:${base} & Table Number:${tableNumber} could be Numbers`)
        }
    }) 

}

module.exports={
    programLogic
}
