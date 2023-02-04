const fs=require('fs')
const request=require('request')
const length=require('./lenght')
let png=JSON.parse(fs.readFileSync('./q.json').toString())
const dir=require('./png')
const gf=require('graceful-fs')

let policy

async function upload(name,params) {
    let n=name
    let p=params
   
       request.post({
        url: "https://file.webapp.163.com/d5/file/new/",
        formData:{
            Authorization:policy,
            fpfile:{
                value:gf.createReadStream(params),
                options: {
                    filename: 'a.png',
                    contentType: 'image/png'
                  }
            }
        },
        headers:{
            "user-agent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'origin':'https://ugc.id5.163.com/upload/'
        }
    },(err,data,body)=>{
                if (err) {
                    upload(n,p)
                }
                if (body) {
                   try {
                    png[name]=JSON.parse(body)
                    png[name]=JSON.parse(png[name].body).url
                   } catch (error) {
                    return upload(n,p)
                   }
                  gf.writeFile('./q.json',JSON.stringify(png,null,'\t'),e=>{
                    return
                   })
                    
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
               //
               policy=await fetch('https://kol2.tongren.163.com/filepicker/apps/h55/token?file_type=image&random=1675249064352')
                    policy=await policy.json()
                    policy=policy.data.token
            //
               let interval=setInterval(async e=>{
               if (await length()==0) {
               clearInterval(interval)
               }
                fetch('https://kol2.tongren.163.com/filepicker/apps/h55/token?file_type=image&random=1675249064352').then(async res=>{
                    try {
                        policy=await res.json()
                        policy=policy.data.token
                    } catch (error) {
                        return
                    }
                },async err=>{
                   return
                })
                
               },8000)
               for (let i = 0; i < files.length; i++) { 
                   upload(files[i],dir.dir+files[i].split('.')[0]+'.png')
                 }
            
         
       }}()