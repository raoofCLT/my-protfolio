# Portfolio Contact Form Setup Instructions

## Overview
Your portfolio now has a fully functional contact form that sends real emails! Here's how to set it up:

## 🚀 Quick Setup

### 1. Backend Setup
```bash
cd backend
npm install
```

### 2. Email Configuration
1. Create a `.env` file in the backend folder:
```bash
cp env.example .env
```

2. Edit the `.env` file with your Gmail credentials:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=raoofkottayil@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=raoofkottayil@gmail.com
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

**Important:** All contact form emails will be sent to `raoofkottayil@gmail.com` (your email). The user's email address is only used for the "reply-to" functionality so you can reply directly to them.

### 3. Gmail App Password Setup
1. Go to your Google Account settings: https://myaccount.google.com/
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Copy the generated password and paste it in `EMAIL_PASS` in your `.env` file

### 4. Start the Backend Server
```bash
cd backend
npm run dev
```

### 5. Start the Frontend
```bash
cd my-protfolio
npm run dev
```

## 🧪 Testing

### Test the Backend
```bash
cd backend
npm run test-contact
```

### Test the Contact Form
1. Open your portfolio in the browser
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email for the message

## 📧 How It Works

### Frontend (Contact.tsx)
- Form validation with real-time error checking
- Sends data to backend API endpoint
- Shows success/error toast notifications
- Resets form after successful submission

### Backend (server.js)
- Receives form data via POST `/api/contact`
- Validates input data
- Sends beautifully formatted HTML email
- Returns success/error response
- Includes security features (rate limiting, CORS, etc.)

### Email Template
- Professional HTML email design
- Includes sender information
- Formatted message content
- Reply-to set to sender's email
- **Email Flow:** User's form → Your email (raoofkottayil@gmail.com) → You can reply directly to user

## 🔧 Troubleshooting

### Common Issues

1. **"Failed to send message" error**
   - Check your Gmail app password is correct
   - Ensure 2-Factor Authentication is enabled
   - Verify the `.env` file is in the backend folder

2. **CORS errors**
   - Make sure `CORS_ORIGIN` matches your frontend URL
   - Default: `http://localhost:5173`

3. **Backend not starting**
   - Check if port 5000 is available
   - Run `npm install` in backend folder
   - Check for syntax errors in `.env` file

4. **Email not received**
   - Check spam folder
   - Verify `EMAIL_TO` address is correct
   - Check backend console for error messages

### Debug Steps

1. **Check backend logs:**
```bash
cd backend
npm run dev
```

2. **Test API directly:**
```bash
cd backend
npm run test-contact
```

3. **Check browser console:**
- Open Developer Tools (F12)
- Look for network errors in Console tab

## 🎯 Features

### ✅ Working Features
- ✅ Form validation (name, email, subject, message)
- ✅ Real-time error display
- ✅ Loading states during submission
- ✅ Success/error toast notifications
- ✅ Form reset after successful submission
- ✅ Professional HTML email templates
- ✅ Security features (rate limiting, CORS)
- ✅ Input sanitization and validation
- ✅ IP tracking for security
- ✅ Reply-to email functionality

### 🔗 Social Links
- ✅ GitHub profile link
- ✅ LinkedIn profile link
- ✅ Instagram profile link
- ✅ Direct email link
- ✅ Phone call link

### 📱 Responsive Design
- ✅ Mobile-friendly layout
- ✅ Glass morphism effects
- ✅ Smooth animations
- ✅ Professional styling

## 🚀 Production Deployment

### Environment Variables for Production
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-production-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-production-email@gmail.com
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-domain.com
```

### Deployment Platforms
- **Heroku**: Add environment variables in dashboard
- **Vercel**: Use Vercel CLI with environment variables
- **Railway**: Configure in Railway dashboard
- **DigitalOcean**: Use App Platform with environment variables

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Look at backend console logs
3. Test the API endpoints manually
4. Verify email configuration

## 🎉 Success!

Once everything is set up:
- Contact form will send real emails to your inbox
- You'll receive beautifully formatted HTML emails
- Form includes all sender information
- You can reply directly to the sender's email
- All social links work properly
- Professional user experience with toast notifications

Your portfolio contact form is now fully functional! 🚀 