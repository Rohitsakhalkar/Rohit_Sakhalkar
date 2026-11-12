# EmailJS Setup — 5 Minutes

## Step 1: Create account
Go to https://www.emailjs.com → Sign up free

## Step 2: Add a Gmail service
Dashboard → Email Services → Add New Service → Gmail
- Sign in with **rohitsakhalkar3@gmail.com**
- Copy the **Service ID** (e.g. `service_abc123`)

## Step 3: Create an email template
Dashboard → Email Templates → Create New Template

Paste this template:

```
Subject: Portfolio contact from {{from_name}} — {{subject}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

- Set **To Email** → `rohitsakhalkar3@gmail.com`
- Copy the **Template ID** (e.g. `template_xyz789`)

## Step 4: Get your Public Key
Dashboard → Account → API Keys → Copy **Public Key**

## Step 5: Fill in .env.local
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then restart the dev server:
```bash
npm run dev
```

That's it. Test by filling the form at http://localhost:3000/contact
