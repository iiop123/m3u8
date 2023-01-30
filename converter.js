const fs=require('fs')
const dir=require('./png')
const request=require('request')
async function randomString(len) {
    　　len = len || 6;
    　　let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    　　let maxPos = $chars.length;
    　　let result = '';
    　　for (let i = 0; i < len; i++) {
    　　　　result += $chars.charAt(Math.floor(Math.random() * maxPos));
    　　}
    　　return result;
    }
    async function upload(params) {
        let p=params
          await request.post({
            url: "https://kf.dianping.com/api/file/burstUploadFile",
            formData:{
                fileName:'x.jpg',
                fileID:new Date().getTime(),
                part:0,
                partSize:1,
                files:{
                    value:params,
                    options: {
                        filename: 'blob',
                        contentType: 'application/octet-stream'
                      }
                }
            },
            headers:{
                "CSC-VisitId":'access-6928681f-8730-4401-b26e-e46c4a74c952'
            }
        },(err,data,body)=>{
                    if (err) {
                        console.log(err);
                        upload(p)
                    }
                    if (body) {
                        console.log(JSON.parse(body).data.uploadPath);
                        fs.writeFileSync('./q.json',JSON.stringify({}))
                    }
                });
            }
!async function cov (params) {
    console.log('start cov');
    let old=fs.readFileSync(dir.dir+dir.m3u8).toString()
    let json=JSON.parse(fs.readFileSync('./q.json'))
    for (const key in json) {
       old=old.replace(key,json[key])
        }
        const m3=await randomString()+'.png'
        fs.writeFileSync(m3,old)
        upload(fs.readFileSync(m3))
}()