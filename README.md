# hexo-theme-kirin
尝试许多hexo的主题，但是都不太喜欢，所以决定结合多个主题，混搭出一个新的主题出来。暂定混搭[next](https://github.com/iissnan/hexo-theme-next)、[yilia](https://github.com/litten/hexo-theme-yilia)、[Gcs-Vno-Jekyll](https://github.com/GcsSloop/Gcs-Vno-Jekyll)三款主题，非常感谢他们 以及之前作者作出的贡献

# 关于开发
目前仅作为bate版，很多个性化设置和功能都没有加上去，在之后会慢慢加上去。
如果你喜欢这个主题，欢迎给我提供一些建议，或者希望增加哪些功能，我会提前帮你个性化哦；
欢迎使用各种方法骚扰！

# 主题预览
![首页](http://oh3nmq7ge.bkt.clouddn.com/theme/kirin/1.png)
![文章](http://oh3nmq7ge.bkt.clouddn.com/theme/kirin/4.png)
![首页](http://oh3nmq7ge.bkt.clouddn.com/theme/kirin/3.png)
![首页](http://oh3nmq7ge.bkt.clouddn.com/theme/kirin/2.png)
更多详情可以查看我的[Blog](http://luolinfeng.com/)
# 使用方法

## 安装依赖

```
npm install hexo-renderer-sass --save
npm install hexo-renderer-ejs --save
npm install hexo-generator-feed --save
```
## 更改站点配置文件

theme: kirin

## 主题配置
```

# html lang
//暂时为支持其他语言
language: zh-CN

# Put your favicon.ico into `hexo-site/source/` directory.
favicon: /favicon.ico

# Set default keywords (Use a comma to separate)
keywords: "关键词"

# Set rss to false to disable feed link.
# Leave rss as empty to use site's feed link.
# Set rss to specific value if you have burned your feed already.
rss:

# Specify the date when the site was setup
#since: 2015

# Footer `powered-by` and `theme-info` copyright
copyright: true

# Canonical, set a canonical link tag in your hexo, you could use it for your SEO of blog.
# See: https://support.google.com/webmasters/answer/139066
# Tips: Before you open this tag, remeber set up your URL in hexo _config.yml ( ex. url: http://yourdomain.com )
canonical: true



# ---------------------------------------------------------------
# Sidebar Settings
# ---------------------------------------------------------------

# main menu navigation
asideBackground: /images/bg.jpg

//菜单，不需要的注释掉就可以
menu:
  home: /
  archives: /archives
  categories: /categories
  tags: /tags
  about: /about
  #sitemap: /sitemap.xml
  #commonweal: /404.html

menu_icons:
  home: '&#xe609;'
  archives: '&#xe605;'
  categories: '&#xe6e3;'
  tags: '&#xe60c;'
  about: '&#xe602;'
  #sitemap: /sitemap.xml

//显示侧边的文章、分类、标签数量
asideNav:
  posts: /archives
  categories: /categories
  tags: /tags

# Social Links
# Key is the link label showing to end users.
# Value is the target link (E.g. GitHub: https://github.com/iissnan)
social:
  GitHub: https://github.com/
  LinkLabel: https://cn.linkedin.com/
  Email: mailto:xxxxx@gmail.com
#  Twitter: twitter
#  Weibo: weibo
  Rss: /atom.xml

# Social Links Icons
# Icon Mapping:
#   Map a menu item to a specific FontAwesome icon name.
#   Key is the name of the item and value is the name of FontAwsome icon. Key is case-senstive.
#   When an globe mask icon presenting up means that the item has no mapping icon.
social_icons:
  # Icon Mappings.
  # KeyMapsToSocalItemKey: NameOfTheIconFromFontAwesome
  GitHub: '&#xe601;'
  LinkLabel: '&#xe608;'
  Email: '&#xe723;'
  Twitter: '&#xe707;'
  Weibo: '&#xe647;'
  Rss: '&#xe639;'

# in theme directory(source/images): /images/avatar.jpg
# in site  directory(source/uploads): /uploads/avatar.jpg
#avatar:
avatar: /images/avatar.jpg


# Code Highlight theme
# Available value:
#    normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: normal

# index list num
recent_post_num: 10

# in theme directory(source/images): /images/avatar.jpg
# in site  directory(source/uploads): /uploads/avatar.jpg

//是否开启文章打赏
contribute: false

contribute_wechat: /images/avatar.jpg
contribute_alipay: /images/avatar.jpg


# Baidu Analytics ID
#baidu_analytics:


# Make duoshuo show UA
# user_id must NOT be null when admin_enable is true!
# you can visit http://dev.duoshuo.com get duoshuo user id.
//是否开启多说评论
duoshuo: false
duoshuo_info:
  ua_enable: true
  admin_enable: false
  user_id: 0
  shortname: xxxx
  hotartical: true
  share: true



# ---------------------------------------------------------------
# footer Settings
# about license http://choosealicense.online/
# ---------------------------------------------------------------
//选择licence 
license: true
license_type:
# 知识共享署名-非商业性使用 4.0 国际许可协议进行许可。
  byNc4.0
#  知识共享署名 4.0 国际许可协议
#  by4.0

# stylesheets loaded in the <head>
stylesheets:
- /css/kirin.css

# scripts loaded in the end of the body
scripts:
- /js/libs/jquery-2.1.4.min.js
- /js/libs/scrollspy.js
- /js/libs/velocity.min.js
- /js/libs/jquery.lazyload.min.js
- /js/kirin.js


kirin_github:
  https://github.com/linfengluo/hexo-theme-kirin
```
# Licence
MIT
