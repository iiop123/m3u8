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
        gf.readFile('./log/file.json',(err,data)=>{
        if (data) {
        try {
            png=JSON.parse(data.toString())
        } catch (error) {
            return length(params)
        }
        files=f.filter(e=>{
            return !png.hasOwnProperty(e)
        })
        params(files.length)
        }
     })
 
}}
module.exports=length
