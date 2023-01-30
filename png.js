const fs=require('fs')
const dir='../m3/' //定义切片目录
const m3u8='1.m3u8'//定义切片m3u8文件名称
const gif=fs.readFileSync('images.png')
!async function png(params) {
    let files=fs.readdirSync(dir)
        if (files) {
            const ts=/.*\.ts/i;
            for (let i = 0; i < files.length; i++) {
                if (ts.test(files[i])) {
                  fs.renameSync(dir+files[i],dir+files[i].split('.')[0]+'.png')
                  let fd=fs.openSync(dir+files[i].split('.')[0]+'.png','r+')
                  fs.write(fd,gif,0,gif.length,0,err=>{
                    if (err) {
                        console.log(err);
                    }
                  })
                }
            }
        }
}()
module.exports={
    dir:dir,
    m3u8:m3u8
}