const fs=require('fs')
const dir=require('./png')
const gf=require('graceful-fs')
let png
async function length(params) {
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
       files=f.filter(e=>{
        png=JSON.parse(gf.readFileSync('./q.json').toString())
        return !png.hasOwnProperty(e)
       })
       return files.length
 
}}
module.exports=length
