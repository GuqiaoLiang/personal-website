# EmailJS 设置指南

## 问题描述
联系页面目前无法发送邮件，因为缺少EmailJS配置。

## 解决方案步骤

### 1. 注册EmailJS账户
1. 访问 [https://www.emailjs.com/](https://www.emailjs.com/)
2. 注册免费账户
3. 验证邮箱地址

### 2. 创建EmailJS服务
1. 登录EmailJS控制台
2. 点击 "Email Services"
3. 点击 "Add New Service"
4. 选择你的邮箱提供商（如Gmail、Outlook等）
5. 按照指示连接你的邮箱账户
6. 复制生成的 "Service ID"

### 3. 创建邮件模板
1. 点击 "Email Templates"
2. 点击 "Create New Template"
3. 设计你的邮件模板，可以使用以下变量：
   - `{{from_name}}` - 发送者姓名
   - `{{from_email}}` - 发送者邮箱
   - `{{subject}}` - 邮件主题
   - `{{message}}` - 邮件内容
4. 保存模板并复制 "Template ID"

### 4. 获取API密钥
1. 点击 "Account"
2. 在 "API Keys" 部分找到 "Public Key"
3. 复制这个公钥

### 5. 配置环境变量
1. 复制 `.env.example` 文件为 `.env`
2. 填入你的EmailJS配置：

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. 重启开发服务器
```bash
npm run dev
```

## 当前状态
- ✅ 项目页面配图已修复 - 现在会显示实际图片而不是首字母
- ✅ 联系页面表单已集成EmailJS - 需要配置环境变量才能正常工作
- ✅ 表单有优雅的降级处理 - 如果EmailJS配置失败，会显示手动发送邮件的选项

## 测试联系表单
1. 填写表单并点击"Send Message"
2. 如果EmailJS配置正确，邮件将自动发送
3. 如果配置有问题，会显示手动发送邮件的选项

## 注意事项
- EmailJS免费版每月有200封邮件的限制
- 确保环境变量文件`.env`不被提交到Git仓库
- 生产环境部署时需要设置正确的环境变量