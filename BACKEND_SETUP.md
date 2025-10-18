# Backend API Setup Instructions

## 🚀 How to Set Up Your Contact Form Backend

### Step 1: Configure Email Settings

1. **Open the `.env` file** in your project root
2. **Replace the placeholder values** with your actual email credentials:

```env
# Email Configuration
EMAIL_USER=your-actual-email@gmail.com
EMAIL_PASS=your-app-password

# Server Configuration  
PORT=5000

# Environment
NODE_ENV=development
```

### Step 2: Get Gmail App Password

**For Gmail users:**

1. Go to your **Google Account settings**
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **App passwords** (you may need to search for it)
4. Select **Mail** and **Other (Custom name)**
5. Enter "Portfolio Contact Form" as the name
6. Copy the generated 16-character password
7. Use this password in your `.env` file (not your regular Gmail password)

**For other email providers:**
- **Outlook/Hotmail**: Use app passwords or OAuth2
- **Yahoo**: Enable app passwords in account security
- **Custom SMTP**: Update the transporter configuration in `server.js`

### Step 3: Start the Backend Server

**Option A: Run backend only**
```bash
npm run server:dev
```

**Option B: Run both frontend and backend together**
```bash
npm run dev:full
```

**Option C: Run backend in production**
```bash
npm run server
```

### Step 4: Test the Contact Form

1. **Start the backend server** (port 5000)
2. **Start the frontend** (port 5173)
3. **Fill out the contact form** on your website
4. **Check your email** for the message
5. **Check the sender's email** for the confirmation message

### Step 5: Production Deployment

**For deployment, you'll need to:**

1. **Set environment variables** on your hosting platform
2. **Update the API URL** in the frontend (replace `localhost:5000` with your domain)
3. **Configure CORS** for your production domain
4. **Set up SSL/HTTPS** for secure email sending

### Troubleshooting

**Common Issues:**

1. **"Authentication failed"**: Check your email credentials and app password
2. **"Connection refused"**: Make sure the backend server is running on port 5000
3. **"CORS error"**: The backend is configured to allow all origins in development
4. **"Email not received"**: Check spam folder, verify email address

**Debug Commands:**
```bash
# Check if server is running
curl http://localhost:5000/api/health

# Test email sending (check server logs)
npm run server:dev
```

### Features Included

✅ **Real email sending** to your inbox  
✅ **Confirmation emails** to the sender  
✅ **Professional HTML email templates**  
✅ **Form validation** and error handling  
✅ **Loading states** and success/error messages  
✅ **Responsive design** with modern UI  
✅ **CORS enabled** for frontend-backend communication  

### Security Notes

- **Never commit** your `.env` file to version control
- **Use app passwords** instead of regular email passwords
- **Enable 2FA** on your email account
- **Consider rate limiting** for production use
- **Use HTTPS** in production for secure communication

---

**Your contact form is now fully functional!** 🎉

When someone fills out the form:
1. You'll receive an email with their message
2. They'll receive a confirmation email
3. The form will show success/error messages
4. All emails are professionally formatted
