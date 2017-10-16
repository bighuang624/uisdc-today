<h1 align="center">uisdc-today</h1>

<p align="center">基于 Vue.js 和 Node.js 开发的优设每日更新内容展示</p>

<p align="center">
<a href="http://kyonhuang.top"><img src="https://img.shields.io/badge/%E4%BD%9C%E8%80%85-KyonHuang-7AD6FD.svg" alt="Author"></a>
<a href="https://github.com/bighuang624/uisdc-today/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="License"></a>
</p>

## 效果示例

<p align="center">
<img src="https://raw.githubusercontent.com/bighuang624/uisdc-today/master/example.jpg">
</p>

## 技术栈

* 前端：Vue.js（非单页面程序）+ jQuery（方便 Ajax 的使用）
* 后端：express + superagent + cheerio
* 测试：mocha + should + supertest

## 使用方法

请确认你使用的电脑有 Node 环境，越新越好。

### 下载项目

```bash
git clone git@github.com:bighuang624/uisdc-today.git
cd uisdc-today
```

### 安装依赖

```bash
# 在 server 文件夹安装依赖（推荐使用 cnpm）
cd server
npm install
```

### 运行服务器

```bash
npm run start
```

### 单元测试

```bash
npm run test
```

### 查看更新内容

运行服务器后，进入`uisdc/html`文件夹，打开 index.html 即可。

## LICENSE

[Apache License 2.0](https://github.com/bighuang624/uisdc-today/blob/master/LICENSE)
