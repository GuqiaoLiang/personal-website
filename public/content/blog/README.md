# Blog Management Guide

## 目录结构

```
public/content/blog/
├── README.md                 # 本文档
├── index.json                # 博客文章列表与元数据
├── images/                   # 博客文章图片目录
│   ├── baozi-finished.jpg   # 包子成品图
│   └── baozi-steaming.jpg   # 包子蒸制图
└── posts/                    # 博客文章目录
    ├── baozi-guide.md       # 包包子指南
    ├── cs-journey.md        # 我的计算机科学之旅
    ├── llm-guide.md         # 理解大型语言模型
    ├── react-vite-guide.md  # React 和 Vite 入门指南
    └── riscv-cpu.md         # 从零开始构建 RISC-V CPU
```

## 如何添加新文章

### 步骤 1: 创建 Markdown 文件

在 `public/content/blog/posts/` 目录下创建新的 `.md` 文件，例如 `my-new-article.md`。

### 步骤 2: 编写文章内容

使用 Markdown 语法编写文章，支持以下特性：

**基本格式**：
- 标题：`# H1`, `## H2`, `### H3`
- 粗体：`**粗体文本**`
- 斜体：`*斜体文本*`
- 行内代码：`` `code` ``
- 链接：`[链接文本](URL)`
- 引用：`> 引用内容`

**表格**：
```markdown
| 列1 | 列2 | 列3 |
| --- | --- | --- |
| 数据1 | 数据2 | 数据3 |
```

**代码块**：
````markdown
```python
def hello_world():
    print("Hello, World!")
```
````

**数学公式**：
- 行内公式：`$E = mc^2$`
- 块级公式：
```markdown
$$
\text{Formula} = \frac{a}{b}
$$
```

**图片**：
```markdown
![图片描述](/content/blog/images/your-image.jpg)
```

### 步骤 3: 添加图片（如需要）

将图片文件放入 `public/content/blog/images/` 目录，然后在 Markdown 中引用：

```markdown
![图片说明](/content/blog/images/your-image.jpg)

_图：图片标题_
```

**图片命名规范**：
- 使用小写字母和连字符
- 描述性命名：`baozi-finished.jpg` 而不是 `img1.jpg`
- 支持格式：`.jpg`, `.png`, `.webp`, `.gif`

### 步骤 4: 更新文章元数据

在 `public/content/blog/index.json` 中添加文章元数据：

```json
{
  "id": 6,
  "title": { "en": "Your Title", "zh": "你的文章标题" },
  "date": "2024-12-30",
  "excerpt": { "en": "Short summary...", "zh": "简短摘要..." },
  "category": { "en": "Category", "zh": "分类名称" },
  "readTime": { "en": "10 min read", "zh": "10 分钟阅读" },
  "file": "my-new-article.md"
}
```

## 文章分类

当前支持的分类：

- **Web Development** - Web 开发相关
- **AI & Machine Learning** - 人工智能和机器学习
- **Computer Architecture** - 计算机体系结构
- **Personal** - 个人感悟和经历
- **Food & Cooking** - 美食和烹饪

添加新分类时，建议使用英文名称以保持一致性。

## Markdown 渲染特性

本博客系统使用自定义的 Markdown 渲染引擎，支持以下高级特性：

### 1. 表格渲染
- 自动添加渐变色表头（British Green → Royal Blue）
- 悬停高亮效果
- 响应式设计，移动端可滚动

### 2. 代码高亮
- 支持多种编程语言：Python, JavaScript, JSX, TypeScript, Bash, C++, Verilog, Assembly 等
- GitHub Dark 主题
- 自动行号显示

### 3. 数学公式
- 使用 KaTeX 渲染
- 支持行内公式和块级公式
- 支持复杂的 LaTeX 语法

**注意**：在 Markdown 中使用单反斜杠 `\`，不要使用双反斜杠 `\\`

正确示例：
```markdown
$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
$$
```

### 4. 图片优化
- 自动懒加载
- 响应式缩放
- 圆角和阴影效果
- 支持图片标题

### 5. 引用块
- 左侧边框（British Green）
- 浅色背景
- 斜体文本

### 6. 列表
- 有序列表和无序列表
- 嵌套列表支持
- 自动缩进

## 文章模板

```markdown
# 文章标题

## 前言

简短介绍文章主题和背景。

> "引用一句名言或重要观点"

## 主要内容

### 小节标题

正文内容，可以包含：

- 列表项 1
- 列表项 2
- 列表项 3

### 代码示例

\`\`\`python
def example():
    print("示例代码")
\`\`\`

### 数据表格

| 项目 | 说明 | 备注 |
| --- | --- | --- |
| 项目1 | 说明1 | 备注1 |
| 项目2 | 说明2 | 备注2 |

### 数学公式

行内公式：当 $x = 1$ 时...

块级公式：

$$
E = mc^2
$$

### 图片展示

![图片描述](/content/blog/images/your-image.jpg)

_图：图片标题_

## 总结

总结文章要点。

## 参考资料

1. [参考链接1](URL)
2. [参考链接2](URL)
```

## 图片管理

### 图片存储位置
- **博客文章图片**：`public/content/blog/images/`
- **网站资源图片**：`src/assets/images/`

### 图片优化建议
- 使用 JPG 格式用于照片（压缩率高）
- 使用 PNG 格式用于图标和透明背景
- 使用 WebP 格式获得最佳压缩（现代浏览器支持）
- 推荐图片宽度：800-1200px
- 文件大小控制在 500KB 以内

### 图片压缩工具
- [TinyPNG](https://tinypng.com/) - 在线压缩
- [Squoosh](https://squoosh.app/) - Google 出品
- ImageOptim (Mac) / FileOptimizer (Windows)

## 当前文章列表

### 1. React 和 Vite 入门指南
- **文件**: `react-vite-guide.md`
- **分类**: Web Development
- **日期**: 2024-12-15
- **阅读时间**: 5 分钟
- **特点**: 包含代码示例、对比表格、数学公式

### 2. 理解大型语言模型
- **文件**: `llm-guide.md`
- **分类**: AI & Machine Learning
- **日期**: 2024-12-10
- **阅读时间**: 8 分钟
- **特点**: 复杂数学公式、架构表格、代码示例

### 3. 从零开始构建 RISC-V CPU
- **文件**: `riscv-cpu.md`
- **分类**: Computer Architecture
- **日期**: 2024-12-05
- **阅读时间**: 10 分钟
- **特点**: Verilog 代码、流水线图表、技术细节

### 4. 我的计算机科学之旅
- **文件**: `cs-journey.md`
- **分类**: Personal
- **日期**: 2024-11-28
- **阅读时间**: 6 分钟
- **特点**: 个人经历、项目展示、学习建议

### 5. 包包子指南
- **文件**: `baozi-guide.md`
- **分类**: Food & Cooking
- **日期**: 2024-12-30
- **阅读时间**: 12 分钟
- **特点**: 详细步骤、真实照片、营养表格、代码示例

## 技术栈

- **Markdown 解析**: react-markdown
- **GitHub Flavored Markdown**: remark-gfm
- **数学公式**: remark-math + rehype-katex
- **代码高亮**: rehype-highlight
- **HTML 支持**: rehype-raw
- **样式**: Tailwind CSS

## 故障排查

### 问题：图片不显示
**解决方案**：
1. 检查图片路径是否正确（使用 `/content/blog/images/` 开头）
2. 确认图片文件已放入 `public/content/blog/images/` 目录
3. 检查图片文件名是否与 Markdown 中的引用一致

### 问题：数学公式显示为乱码
**解决方案**：
1. 确保 `index.html` 中已引入 KaTeX CSS
2. 检查公式语法是否正确（使用单反斜杠 `\`）
3. 清除浏览器缓存并刷新

### 问题：代码没有语法高亮
**解决方案**：
1. 确保代码块指定了语言类型（如 ` ```python `）
2. 检查 `MarkdownRenderer.jsx` 中是否正确配置了 `rehype-highlight`

### 问题：表格样式不正确
**解决方案**：
1. 确保表格语法正确（需要表头分隔行）
2. 检查 `MarkdownRenderer.jsx` 中的表格样式是否正确应用

## 最佳实践

### 文章编写
1. **标题清晰**：使用描述性标题，便于 SEO
2. **结构合理**：使用多级标题组织内容
3. **代码规范**：代码块指定语言，添加注释
4. **图文并茂**：适当使用图片和图表
5. **引用来源**：引用资料时提供链接

### 性能优化
1. **图片优化**：压缩图片，使用适当的格式
2. **代码分割**：长文章考虑分页或懒加载
3. **缓存利用**：合理使用浏览器缓存

### 可访问性
1. **图片 alt 文本**：为所有图片添加描述性 alt 属性
2. **语义化标签**：使用正确的 HTML 标签
3. **对比度**：确保文本和背景有足够的对比度

## 维护日志

- **2024-12-30**: 添加包包子指南文章，包含真实照片
- **2024-12-30**: 创建博客管理文档
- **2024-12-30**: 初始化博客系统，添加 4 篇技术文章

## 联系方式

如有问题或建议，请联系：
- **Email**: scygl3@nottingham.ac.uk
- **GitHub**: [@GuqiaoLiang](https://github.com/GuqiaoLiang)
