# Jingfei Wang — Personal Homepage

Online: **https://jingfei0165.github.io**

纯静态站点（HTML + CSS + 少量 JS），由 GitHub Pages 直接托管，**不需要构建**。
样式沿用 [AcademicPages](https://github.com/academicpages/academicpages.github.io)（Minimal Mistakes 的学术分支）的编译产物。

## 目录结构

```
.
├── index.html                     About me（首页）
├── research/index.html            Research（期刊论文 + 预印本）
├── talks/index.html               Talks and Service（报告 / 助教 / 奖学金）
├── assets/
│   ├── CV_Jingfei_Wang.pdf        CV（导航栏和侧栏都指向它）
│   ├── css/main.css               主题样式
│   ├── css/academicons.css        学术图标（Google Scholar 等）
│   ├── js/main.min.js             导航折叠 + 主题切换
│   └── js/theme.js                深色主题数据
└── images/profile.png             头像（当前是 "JW" 占位图）
```

## 常见修改

| 想改什么 | 改哪里 |
|---|---|
| 名字、身份、单位、邮箱 | `index.html` 与三个页面里共用的侧栏区块 |
| 换头像 | 覆盖 `images/profile.png`（建议 600×600 的 PNG） |
| 换 CV | 覆盖 `assets/CV_Jingfei_Wang.pdf` |
| 加/改论文 | `research/index.html`，复制一条 `<p><strong>[n]</strong> …</p>` 改内容 |
| 加学术报告 | `talks/index.html`，在 `<ul>` 里加一条 `<li>` |

> 侧栏在三个页面各出现一次，改名字/邮箱时记得三处一起改。

## 本地预览

```powershell
cd personal-site
python -m http.server 8000
# 浏览器打开 http://127.0.0.1:8000
```

## 发布

直接提交到 `main` 分支即可，GitHub Pages 会自动更新（约 1 分钟）。
