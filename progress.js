const fs=require('fs')
const dir=require('./png')
let png
setInterval(async function (params) {
    let files=fs.readdirSync(dir.dir)
    if (files) {
        let f=[]
       const ts=/.*\.png/i

       files=files.filter(e=>{
           return ts.test(e)
       })
       files.forEach(e=>{
        return f.push(e.split('.')[0]+'.ts')
       })
         fs.readFile('./q.json',(err,data)=>{
        if (data) {
        png=JSON.parse(data.toString())
        files=f.filter(e=>{
            return !png.hasOwnProperty(e)
        })
        params(files.length)
        }
     })
     
 
}},3000,function (params) {
    console.log('剩余数量'+params);
})
