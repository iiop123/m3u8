const fs=require('fs')
const dir='../m3/' //定义目录
const m3u8='1.m3u8'//定义m3u8文件名称
!async function png(params) {
    let files=fs.readdirSync(dir)
        if (files) {
            const ts=/.*\.ts/i;
            for (let i = 0; i < files.length; i++) {
                if (ts.test(files[i])) {
                  fs.renameSync(dir+files[i],dir+files[i].split('.')[0]+'.png')
                }
            }
        }
}()
module.exports={
    dir:dir,
    m3u8:m3u8
}