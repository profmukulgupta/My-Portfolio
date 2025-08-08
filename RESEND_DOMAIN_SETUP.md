# Resend Domain Setup Guide

## 🚨 Quick Fix (Current Solution)
The code has been updated to use Resend's default domain `onboarding@resend.dev` which works immediately without domain verification.

**What changed:**
- `from: "Portfolio Query <onboarding@resend.dev>"` (instead of yourdomain.com)
- Added `reply_to: email` so you can reply directly to users
- Enhanced email template with clear sender information

## 🎯 How to Set Up Your Own Domain (Recommended for Production)

### Step 1: Add Domain in Resend
1. Go to [Resend Domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `mukulgupta.dev` or `portfolio.mukulgupta.com`)

### Step 2: Add DNS Records
Add these DNS records to your domain provider:

#### For Root Domain (e.g., mukulgupta.dev):
\`\`\`
Type: MX
Name: @
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10

Type: TXT
Name: @
Value: "v=spf1 include:amazonses.com ~all"

Type: TXT
Name: _dmarc
Value: "v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com"

Type: CNAME
Name: [resend-provided-key]._domainkey
Value: [resend-provided-value].dkim.amazonses.com
\`\`\`

#### For Subdomain (e.g., mail.mukulgupta.dev):
\`\`\`
Type: MX
Name: mail
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10

Type: TXT
Name: mail
Value: "v=spf1 include:amazonses.com ~all"

Type: CNAME
Name: [resend-provided-key]._domainkey.mail
Value: [resend-provided-value].dkim.amazonses.com
\`\`\`

### Step 3: Verify Domain
1. After adding DNS records, click "Verify" in Resend dashboard
2. Wait for DNS propagation (can take up to 24 hours)
3. Once verified, update your code to use your domain

### Step 4: Update Code (After Domain Verification)
\`\`\`typescript
// Replace this line in app/api/send-query/route.ts
from: "Portfolio Query <noreply@yourdomain.com>", // Use your verified domain
\`\`\`

## 🔧 Alternative Solutions

### Option 1: Use Subdomain
Instead of your main domain, use a subdomain like:
- `mail.mukulgupta.dev`
- `noreply.mukulgupta.dev`
- `portfolio.mukulgupta.dev`

### Option 2: Use Free Domain Services
If you don't have a domain, consider:
- **Vercel Domains**: Get a free `.vercel.app` domain
- **GitHub Pages**: Use `username.github.io`
- **Netlify**: Get a free `.netlify.app` domain

### Option 3: Keep Using Resend Default
The current setup with `onboarding@resend.dev` works perfectly for:
- Development and testing
- Small personal portfolios
- When you don't need custom branding

## 📧 Current Email Flow (Working Now)

1. **User submits form** → Your API
2. **API processes data** → Validates and formats
3. **Resend sends email** → From `onboarding@resend.dev`
4. **You receive email** → At `mukulg1722@gmail.com`
5. **You can reply** → Directly to user's email (reply-to is set)

## ✅ Benefits of Current Setup

- ✅ **Works immediately** - No domain setup required
- ✅ **Professional emails** - HTML formatted with your branding
- ✅ **Direct replies** - You can reply directly to users
- ✅ **Priority classification** - Automatic importance levels
- ✅ **Complete information** - All form data included

## 🚀 Testing Your Setup

1. **Deploy the updated code**
2. **Test the contact form** on your website
3. **Check your email** at mukulg1722@gmail.com
4. **Verify you can reply** directly to the sender

## 📞 Need Help?

If you encounter any issues:
1. Check Vercel function logs
2. Verify your Resend API key
3. Test with a simple email first
4. Contact Resend support if domain verification fails

The current setup should work immediately! 🎉
