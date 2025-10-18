# 📧 EmailJS Setup Guide for Contact Form

## 🚀 **Quick Setup Steps**

### **Step 1: Create EmailJS Account**

1. **Go to [EmailJS.com](https://www.emailjs.com/)**
2. **Sign up** for a free account
3. **Verify your email** address

### **Step 2: Add Email Service**

1. **Go to Email Services** in your dashboard
2. **Click "Add New Service"**
3. **Choose Gmail** (or your preferred email provider)
4. **Connect your Gmail account**
5. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### **Step 3: Create Email Template**

1. **Go to Email Templates** in your dashboard
2. **Click "Create New Template"**
3. **Use this template content**:

```html
Subject: Portfolio Contact: {{subject}}

Hello Ahsan,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.
```

4. **Save the template**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### **Step 4: Get Public Key**

1. **Go to Account** → **General**
2. **Copy your Public Key** (looks like: `user_xxxxxxx`)

### **Step 5: Update Your Code**

**Replace these placeholders in `src/components/Contact.jsx`:**

```javascript
// Line 16: Replace YOUR_PUBLIC_KEY
emailjs.init('user_xxxxxxx') // Your actual public key

// Line 44: Replace YOUR_SERVICE_ID
'YOUR_SERVICE_ID', // Replace with service_xxxxxxx

// Line 45: Replace YOUR_TEMPLATE_ID  
'YOUR_TEMPLATE_ID', // Replace with template_xxxxxxx

// Line 47: Replace YOUR_PUBLIC_KEY
'YOUR_PUBLIC_KEY' // Replace with user_xxxxxxx
```

### **Step 6: Test Your Contact Form**

1. **Start your development server**: `npm run dev`
2. **Go to the Contact section**
3. **Fill out the form** with test data
4. **Submit the form**
5. **Check your email** for the message

## 📧 **EmailJS Features**

### **Free Tier Includes:**
- ✅ **200 emails/month**
- ✅ **Email templates**
- ✅ **Multiple email services**
- ✅ **Spam protection**
- ✅ **Analytics dashboard**

### **Professional Features:**
- ✅ **Custom email templates**
- ✅ **Email scheduling**
- ✅ **Advanced analytics**
- ✅ **Priority support**

## 🔧 **Template Variables**

Your template can use these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (recipient)
- `{{reply_to}}` - Reply-to email

## 🎨 **Advanced Template Example**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; }
        .header { background: linear-gradient(135deg, #06b6d4, #3b82f6); color: white; padding: 20px; }
        .content { padding: 20px; background: #f8fafc; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #3b82f6; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h2>🎮 New Portfolio Contact</h2>
    </div>
    <div class="content">
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> {{from_name}}</p>
        <p><strong>Email:</strong> {{from_email}}</p>
        <p><strong>Subject:</strong> {{subject}}</p>
        
        <h3>Message</h3>
        <div class="message-box">
            {{message}}
        </div>
        
        <p><em>Reply directly to this email to respond to {{from_name}}.</em></p>
    </div>
</body>
</html>
```

## 🚨 **Troubleshooting**

### **Common Issues:**

1. **"Invalid public key"**: Check your public key in EmailJS dashboard
2. **"Service not found"**: Verify your service ID is correct
3. **"Template not found"**: Check your template ID
4. **"Email not received"**: Check spam folder, verify email service connection

### **Debug Steps:**

1. **Check browser console** for error messages
2. **Verify all IDs** are correct in your code
3. **Test with EmailJS dashboard** first
4. **Check email service** connection status

## 🔒 **Security Notes**

- ✅ **Public key is safe** to expose in frontend code
- ✅ **Service ID and Template ID** are also safe to expose
- ✅ **No sensitive credentials** stored in frontend
- ✅ **Rate limiting** prevents spam

## 📱 **Mobile Testing**

After setup, test on:
- ✅ **Desktop browsers**
- ✅ **Mobile devices**
- ✅ **Different email clients**

---

**Your contact form will work perfectly with GitHub Pages!** 🎉

**Need help with any step? Let me know!**
