# 部署指南 - www.GuqiaoLiang.com

## 快速部署步骤

### 方法1: Vercel CLI (推荐)

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel --prod
   ```

4. **配置自定义域名**
   ```bash
   vercel domains add www.GuqiaoLiang.com
   ```

### 方法2: GitHub + Vercel (自动化)

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Deploy ready"
   git push origin main
   ```

2. **在Vercel连接GitHub仓库**
   - 访问 https://vercel.com/new
   - 导入你的GitHub仓库
   - 自动部署

### 方法3: 手动部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **部署dist文件夹**
   - 将 `dist` 文件夹上传到任何静态网站托管服务

## 域名配置

### DNS设置

在域名注册商处配置以下DNS记录：

**选项A (推荐)**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**选项B**:
```
Type: A
Name: @
Value: 76.76.21.21
Type: CNAME
Name: www
Value: your-project.vercel.app
```

### SSL证书
Vercel会自动为你的域名提供免费的SSL证书。

## 环境变量 (可选)

如果需要环境变量，在Vercel项目设置中添加：

```
VITE_API_URL=your-api-url
```

## 故障排除

### 常见问题

1. **DNS不生效**
   - 等待24-48小时DNS传播
   - 使用 `dig www.GuqiaoLiang.com` 检查DNS记录

2. **构建失败**
   - 检查 `package.json` 中的构建脚本
   - 确保所有依赖正确安装

3. **路由问题**
   - 确保 `vercel.json` 中的路由配置正确
   - 检查SPA路由设置

### 支持

- Vercel文档: https://vercel.com/docs
- 域名配置: https://vercel.com/docs/concepts/projects/custom-domains