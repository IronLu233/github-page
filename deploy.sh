#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
git remote add origin https://github.com/IronLu233/IronLu233.github.io.git
# 如果发布到 https://<USERNAME>.github.io
git push origin master -f
