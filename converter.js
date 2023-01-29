const fs=require('fs')
const dir=require('./png')
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
!async function cov (params) {
    console.log('start cov');
    let old=fs.readFileSync(dir.dir+dir.m3u8).toString()
    let json=fs.readFileSync('./q.json')
    json=JSON.parse(json)
    for (const key in json) {
       old=old.replace(key,json[key])
        }
        fs.writeFileSync(await randomString()+'.m3u8',old)
        fs.writeFileSync('./q.json',JSON.stringify({}))
}()