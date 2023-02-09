## 循环上传fake图片（视频切片）到图床
### 文件简介
#### - upload.js 上传脚本
#### - length.js 上传进度模块
#### - png.js 伪装图片用脚本
#### - converter.js 转换合并m3u8文件

------------


### 使用方法
#### 修改png.js文件，修改文件目录
```javascript
const dir="E:\\v-demo\\big-file\\" //定义切片目录
const m3u8='1.m3u8'//定义切片m3u8文件名称
```
执行`node shell.js `即可循环上传切片到图床
#### 上传成功的链接会添加到`log/link.json`文件中，格式如下：

    {
    	"2023/2/6 19:11:13": "https://img.dingding.wtf/api/img/76xjCY"
    }