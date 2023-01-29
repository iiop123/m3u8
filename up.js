const fs=require('fs')
const request=require('request')
let png=JSON.parse(fs.readFileSync('./q.json').toString())
const dir=require('./png')
async function upload(name,params) {
    let n=name
    let p=params
      await request.post({
                url: "https://api.com/api/utility/upload",//上传图床接口
                formData:{
                   type:'feedback',
                    file:{
                        value:params,
                        options: {
                            filename: 'topsecret.png',
                            contentType: 'image/jpeg'
                          }
                    }
                }
            },(err,data,body)=>{
                if (err) {
                    console.log(err);
                    upload(n,p)
                }
                if (body) {
                    png[name]=JSON.parse(body).data.url
                    return fs.writeFileSync('./q.json',JSON.stringify(png,null,'\t'))
                }
            });
        }
        !async function upload_init(params) {
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
                return !png.hasOwnProperty(e)
               })
    
            
               
               for (let i = 0; i < files.length; i++) { 
                   upload(files[i],fs.createReadStream(dir.dir+files[i].split('.')[0]+'.png'))
                 }
         
       }}()