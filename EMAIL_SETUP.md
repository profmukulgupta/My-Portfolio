# Email Integration Setup Guide

## Overview
Your portfolio now has email integration that sends queries directly to `mukulg1722@gmail.com` using Resend.

## Setup Steps

### 1. Sign up for Resend
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### 2. Get API Key
1. Go to your Resend dashboard
2. Navigate to "API Keys"
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 3. Add Environment Variable
Add this to your Vercel environment variables:
\`\`\`
RESEND_API_KEY=re_your_api_key_here
\`\`\`

### 4. Domain Setup (Optional but Recommended)
For production, you should verify your domain:
1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `yourportfolio.com`)
3. Add the required DNS records
4. Update the `from` field in the API route to use your domain

### 5. Testing
- Test the query form on your website
- Check your email (mukulg1722@gmail.com) for the formatted query
- Check Vercel logs for any errors

## Features Included

### ✅ Email Features
- **Direct Email Delivery**: Queries sent to mukulg1722@gmail.com
- **Beautiful HTML Formatting**: Professional email template
- **Automatic Priority Classification**: High/Medium/Low based on keywords
- **Reply Button**: One-click reply with pre-filled subject
- **Detailed Information**: Name, email, subject, message, timestamp, user agent
- **Fallback Logging**: Still logs to console if email fails

### ✅ Priority Keywords
- **High Priority**: urgent, asap, emergency, critical, important
- **Medium Priority**: project, collaboration, business, opportunity, partnership
- **Low Priority**: Everything else

### ✅ Email Template Includes
- Gradient header with portfolio branding
- Priority badge (color-coded)
- All form fields in organized sections
- Timestamp in IST timezone
- User agent for debugging
- One-click reply button
- Professional footer

## Troubleshooting

### Common Issues
1. **Email not received**: Check spam folder, verify API key
2. **API errors**: Check Vercel logs, ensure environment variable is set
3. **Domain issues**: Use default Resend domain initially, add custom domain later

### Fallback System
If email sending fails, the query is still logged to Vercel logs as backup.

## Cost
- **Resend Free Tier**: 100 emails/day, 3,000 emails/month
- **Paid Plans**: Start at $20/month for 50,000 emails

## Next Steps
1. Set up the Resend account and API key
2. Deploy the changes
3. Test the query form
4. Optionally add your custom domain for professional emails
