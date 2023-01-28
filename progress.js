const fs=require('fs')
const dir=require('./png')
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
       files=f.filter(e=>{
        let png=JSON.parse(fs.readFileSync('./q.json').toString())
        return !png.hasOwnProperty(e)
       })
       console.log('上传还剩'+files.length);
 
}},3000)
