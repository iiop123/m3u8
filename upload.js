const fs=require('fs')
const request=require('request')
const length=require('./lenght')
let png=JSON.parse(fs.readFileSync('./log/file.json').toString())
const dir=require('./png')
const gf=require('graceful-fs')
var shell = require('shelljs');
var Bagpipe = require('bagpipe');
// 设定最大并发数为10
var bagpipe = new Bagpipe(5);
let policy

async function upload(name,params) {
    let n=name
    let p=params
    let opt={
        url: "https://file.webapp.163.com/d5/file/new/",
        formData:{
            Authorization:policy,
           fpfile:{
                value:gf.createReadStream(params),
                options: {
                    filename: '151.png',
                    contentType: 'image/png'
                  }
            }
        },
        headers:{
            "user-agent":'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'origin':'https://ugc.id5.163.com/upload/',
            //'x-requested-with':'XMLHttpRequest'
        }
    }
    let cb=(err,data,body)=>{
        if (err) {
            console.log(err);
            upload(n,p)
        }
        if (body) {
           try {
           let url=JSON.parse(body)
           url=JSON.parse(url.body).url

            //url=url.split(/:\/\//)[1]
            png[name]=url
           } catch (error) {
            return upload(n,p)
           }

           gf.writeFile('./log/file.json',JSON.stringify(png,null,'\t'),e=>{
            return
           })
            
        }
    }
   bagpipe.push(request.post,opt,cb)
            
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
               let interval=setInterval(e=>{
      
                length(function (p){
                        let _num=new Promise((resolve,rej)=>{
                            if (p!=null) {
                                resolve(p)
                            }
                        })
                        _num.then(e=>{
                            console.log('上传剩余'+e);
                            if (e==0) {
                                shell.exec('node converter.js')
                                clearInterval(interval)
                            }
                        })
               })
            
          
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