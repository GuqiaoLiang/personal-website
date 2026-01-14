# Assets Management Guide

## 项目资源管理指南

本文档说明项目中所有图片、文档和其他静态资源的组织和管理方式。

## 目录结构

```
personal-website/
├── public/                          # 公共静态资源（构建时直接复制）
│   ├── blog/                       # 博客相关资源
│   │   ├── images/                 # 博客文章图片
│   │   │   ├── baozi-finished.jpg  # 153 KB - 包子成品图
│   │   │   └── baozi-steaming.jpg  # 312 KB - 包子蒸制图
│   │   ├── README.md               # 博客管理文档
│   │   └── *.md                    # 博客文章 Markdown 文件
│   ├── 404.html                    # 404 错误页面
│   └── content/assets/GuqiaoLIANG_CV.pdf  # 简历 PDF 文件
│
└── src/                            # 源代码目录
    └── assets/                     # 源代码资源（需要构建处理）
        └── images/                 # 网站页面图片
            ├── 3DModel.png         # 130 KB - 3D 模型项目
            ├── UniversityOfNottingham.jpg  # 273 KB - 诺丁汉大学
            ├── buildYourOwnWorld.png       # 54 KB - 迷宫游戏
            ├── cpu.png             # 90 KB - CPU 项目
            ├── goldengatebridge.jpg        # 3.5 MB - 金门大桥
            ├── selfie.jpg          # 358 KB - 个人照片
            ├── spreadsheetAgent.png        # 3.1 MB - 电子表格代理
            ├── wechatPublicationAccount.jpg # 28 KB - 微信公众号二维码
            └── index.js            # 图片导出文件
```

## 资源分类

### 1. 博客图片 (`public/content/blog/images/`)

**用途**：博客文章中使用的图片

**特点**：
- 直接通过 URL 路径访问：`/content/blog/images/filename.jpg`
- 不经过 Vite 构建处理
- 适合动态内容和用户上传的图片

**当前文件**：
| 文件名 | 大小 | 用途 | 所属文章 |
| --- | --- | --- | --- |
| baozi-finished.jpg | 153 KB | 成品包子照片 | 包包子指南 |
| baozi-steaming.jpg | 312 KB | 蒸制中的包子 | 包包子指南 |

**添加新图片**：
```bash
# 复制图片到目录
cp your-image.jpg public/content/blog/images/

# 在 Markdown 中引用
![图片描述](/content/blog/images/your-image.jpg)
```

### 2. 网站页面图片 (`src/assets/images/`)

**用途**：网站页面中使用的图片（About, Projects, Home 等）

**特点**：
- 通过 ES6 import 导入
- 经过 Vite 构建优化（压缩、hash 命名）
- 适合固定的网站资源

**当前文件**：
| 文件名 | 大小 | 用途 | 所属页面 |
| --- | --- | --- | --- |
| selfie.jpg | 358 KB | 个人照片 | About |
| UniversityOfNottingham.jpg | 273 KB | 大学照片 | About |
| goldengatebridge.jpg | 3.5 MB | 背景图片 | Home |
| spreadsheetAgent.png | 3.1 MB | 项目截图 | Projects |
| 3DModel.png | 130 KB | 项目截图 | Projects |
| buildYourOwnWorld.png | 54 KB | 项目截图 | Projects |
| cpu.png | 90 KB | 项目截图 | Projects |
| wechatPublicationAccount.jpg | 28 KB | 二维码 | Contact |

**使用方式**：
```javascript
// 在 index.js 中导出
export { default as selfie } from './selfie.jpg';

// 在组件中导入
import { selfie } from '../../assets/images';

// 在 JSX 中使用
<img src={selfie} alt="Personal photo" />
```

### 3. 文档资源 (`public/`)

**当前文件**：
- `content/assets/GuqiaoLIANG_CV.pdf` - 个人简历 PDF
- `404.html` - 自定义 404 页面

**访问方式**：
```html
<!-- 直接通过 URL 访问 -->
<a href="/content/assets/GuqiaoLIANG_CV.pdf" download>Download CV</a>
```

## 图片优化指南

### 推荐的图片规格

| 用途 | 推荐尺寸 | 格式 | 最大文件大小 |
| --- | --- | --- | --- |
| 博客文章图片 | 800-1200px 宽 | JPG/WebP | 500 KB |
| 项目截图 | 1200-1600px 宽 | PNG/WebP | 1 MB |
| 个人照片 | 600-800px 宽 | JPG | 300 KB |
| 背景图片 | 1920px 宽 | JPG/WebP | 500 KB |
| 图标/Logo | 原始尺寸 | PNG/SVG | 100 KB |

### 需要优化的图片

当前有两张图片超过推荐大小，建议优化：

**1. goldengatebridge.jpg (3.5 MB)**
- 当前用途：Home 页面背景
- 建议：压缩到 500 KB 以内
- 工具：TinyJPG, Squoosh

**2. spreadsheetAgent.png (3.1 MB)**
- 当前用途：Projects 页面项目截图
- 建议：压缩到 1 MB 以内或转换为 WebP
- 工具：TinyPNG, Squoosh

### 图片压缩工具

**在线工具**：
- [TinyPNG](https://tinypng.com/) - PNG/JPG 压缩
- [Squoosh](https://squoosh.app/) - Google 出品，支持多种格式
- [Compressor.io](https://compressor.io/) - 高质量压缩

**命令行工具**：
```bash
# ImageMagick - 调整大小和压缩
convert input.jpg -resize 1200x -quality 85 output.jpg

# cwebp - 转换为 WebP
cwebp -q 80 input.jpg -o output.webp

# pngquant - PNG 压缩
pngquant --quality=65-80 input.png -o output.png
```

**桌面工具**：
- ImageOptim (Mac)
- FileOptimizer (Windows)
- GIMP (跨平台)

## 图片命名规范

### 命名原则
1. **使用小写字母**：`my-image.jpg` 而不是 `My-Image.jpg`
2. **使用连字符**：`baozi-finished.jpg` 而不是 `baozi_finished.jpg`
3. **描述性命名**：`university-building.jpg` 而不是 `img001.jpg`
4. **避免特殊字符**：不使用空格、中文、特殊符号
5. **包含版本号**（如需要）：`logo-v2.png`

### 命名示例

**✅ 好的命名**：
- `baozi-finished.jpg`
- `project-screenshot-1.png`
- `profile-photo-2024.jpg`
- `university-of-nottingham.jpg`

**❌ 不好的命名**：
- `IMG_1234.jpg`
- `屏幕截图.png`
- `my photo.jpg`
- `pic1.jpg`

## 图片格式选择

### JPG/JPEG
**适用场景**：照片、复杂图像
**优点**：文件小，压缩率高
**缺点**：有损压缩，不支持透明
**推荐用途**：个人照片、背景图、博客配图

### PNG
**适用场景**：图标、截图、需要透明背景
**优点**：无损压缩，支持透明
**缺点**：文件较大
**推荐用途**：Logo、图标、UI 元素、项目截图

### WebP
**适用场景**：现代浏览器
**优点**：文件小，质量高，支持透明
**缺点**：旧浏览器不支持
**推荐用途**：所有场景（配合 fallback）

### SVG
**适用场景**：矢量图形、图标
**优点**：无限缩放，文件小
**缺点**：不适合复杂图像
**推荐用途**：Logo、图标、简单图形

## 添加新资源的流程

### 添加博客图片

```bash
# 1. 准备图片（压缩优化）
# 2. 复制到博客图片目录
cp your-image.jpg public/content/blog/images/

# 3. 在 Markdown 文章中引用
# ![图片描述](/content/blog/images/your-image.jpg)

# 4. 提交到 Git
git add public/content/blog/images/your-image.jpg
git commit -m "Add blog image: your-image.jpg"
```

### 添加网站页面图片

```bash
# 1. 准备图片（压缩优化）
# 2. 复制到 assets 目录
cp your-image.jpg src/assets/images/

# 3. 在 index.js 中导出
# export { default as yourImage } from './your-image.jpg';

# 4. 在组件中导入使用
# import { yourImage } from '../../assets/images';

# 5. 提交到 Git
git add src/assets/images/your-image.jpg
git add src/assets/images/index.js
git commit -m "Add asset image: your-image.jpg"
```

## 图片懒加载

博客系统已实现图片懒加载，通过 `MarkdownRenderer` 组件自动处理。

**特性**：
- 图片进入视口时才加载
- 减少初始页面加载时间
- 节省带宽

**实现方式**：
```jsx
<img 
  src={src} 
  alt={alt} 
  loading="lazy"  // 原生懒加载
  className="max-w-full h-auto rounded-lg shadow-md"
/>
```

## 响应式图片

### 使用 srcset

对于大图片，可以提供多个尺寸：

```html
<img 
  src="/images/large.jpg"
  srcset="/images/small.jpg 600w,
          /images/medium.jpg 1200w,
          /images/large.jpg 1800w"
  sizes="(max-width: 600px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
  alt="Responsive image"
/>
```

### 使用 picture 元素

提供不同格式的图片：

```html
<picture>
  <source srcset="/images/photo.webp" type="image/webp">
  <source srcset="/images/photo.jpg" type="image/jpeg">
  <img src="/images/photo.jpg" alt="Photo">
</picture>
```

## CDN 集成（可选）

对于大型项目，可以考虑使用 CDN 托管图片：

**推荐的 CDN 服务**：
- Cloudinary
- imgix
- Cloudflare Images
- AWS S3 + CloudFront

**优点**：
- 自动优化和转换
- 全球加速
- 减轻服务器负担

## 图片版权和许可

### 当前图片来源
- **个人照片**：自有版权
- **项目截图**：自有版权
- **大学照片**：公开资源或自拍
- **其他图片**：确保有使用权限

### 使用第三方图片
如果使用第三方图片，请：
1. 确认许可证（CC0, CC BY, 商业许可等）
2. 在文章中注明来源
3. 遵守使用条款

**免费图片资源**：
- [Unsplash](https://unsplash.com/)
- [Pexels](https://pexels.com/)
- [Pixabay](https://pixabay.com/)

## 备份和版本控制

### Git LFS（大文件存储）

对于大型图片文件，考虑使用 Git LFS：

```bash
# 安装 Git LFS
git lfs install

# 跟踪大文件
git lfs track "*.jpg"
git lfs track "*.png"

# 提交 .gitattributes
git add .gitattributes
git commit -m "Configure Git LFS"
```

### 备份策略
1. **Git 仓库**：所有图片都在 Git 版本控制中
2. **云存储**：定期备份到云端（Google Drive, Dropbox）
3. **本地备份**：保留原始高质量版本

## 性能监控

### 检查图片大小

```bash
# 查看所有图片大小
find public/content/blog/images -type f -exec ls -lh {} \; | awk '{print $9, $5}'
find src/assets/images -type f -name "*.jpg" -o -name "*.png" | xargs ls -lh
```

### 分析页面性能

使用浏览器开发者工具：
1. Network 标签查看图片加载时间
2. Lighthouse 检查性能评分
3. Coverage 查看未使用的资源

## 维护清单

### 定期检查（每月）
- [ ] 检查是否有未优化的大图片
- [ ] 清理未使用的图片资源
- [ ] 更新图片压缩工具
- [ ] 检查图片加载性能

### 添加新图片时
- [ ] 压缩优化图片
- [ ] 使用规范的命名
- [ ] 添加适当的 alt 文本
- [ ] 测试在不同设备上的显示效果
- [ ] 提交到 Git 并推送

## 故障排查

### 问题：图片不显示

**可能原因**：
1. 路径错误
2. 文件名大小写不匹配
3. 文件未提交到 Git

**解决方案**：
```bash
# 检查文件是否存在
ls -la public/content/blog/images/your-image.jpg

# 检查 Git 状态
git status

# 检查浏览器控制台错误
# 打开 DevTools > Console
```

### 问题：图片加载慢

**解决方案**：
1. 压缩图片文件
2. 使用 WebP 格式
3. 启用 CDN
4. 实现懒加载

### 问题：构建后图片路径错误

**解决方案**：
- `public/` 中的文件使用绝对路径：`/content/blog/images/file.jpg`
- `src/assets/` 中的文件使用 import 导入

## 联系方式

如有资源管理相关问题，请联系：
- **Email**: scygl3@nottingham.ac.uk
- **GitHub**: [@GuqiaoLiang](https://github.com/GuqiaoLiang)
