## maomao&hexo主题

不要吐槽猫猫的代码，那会让我很伤心。
<br>
BUG有很多，你可以反馈给我，如果我能修的话。
<br>
你可以在我的网站找到一些使用教程/大概
https://rongbuqiu.com
<br>
评论：https://twikoo.js.org
<br>
图标库：https://feathericons.com
<br>

![预览图](cover.png)

## 需要安装的插件
```
npm install --save hexo-wordcount
```
## 可能需要创建的页面
 - links
 - about
 - search

### links
```
links: 
  绒布球: 
    url: https://rongbuqiu.com/
    img: https://cdn.jsdelivr.net/gh/qiamaomao/rbq-source/QQ22915519023113713520210301004916.svg
    descr: 猫猫的快乐小站
```
### search
```
npm install hexo-generator-searchdb
```
You can configure this plugin in your root _config.yml. All the arguments are optional.
```
search:
  path: search.xml
  field: post
  content: true
  format: html
```