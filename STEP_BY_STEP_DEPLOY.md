# Step-by-Step Deployment Guide

Follow these steps EXACTLY in order. Don't skip any steps!

## STEP 1: Check What's Wrong

### 1.1 Open Terminal
- Press `Cmd + Space` on your Mac
- Type "Terminal"
- Press Enter

### 1.2 Navigate to Your Project
Copy and paste this EXACT command:

```bash
cd /Users/charmaineregina/Documents/Codex/runforestrun
```

Press Enter.

### 1.3 Check Git Status
Copy and paste:

```bash
git status
```

Press Enter.

**What do you see?**
- If you see a list of files → Go to STEP 2
- If you see "not a git repository" → Go to STEP 1.4
- If you see "nothing to commit" → Go to STEP 3

### 1.4 If Git Not Initialized
If you saw "not a git repository", run:

```bash
git init
git remote add origin https://github.com/charmaineregina77/runforestrun.git
git branch -M main
```

Then go back to STEP 1.3.

---

## STEP 2: Add and Commit Changes

### 2.1 Add All Files
Copy and paste:

```bash
git add .
```

Press Enter.

### 2.2 Commit Changes
Copy and paste:

```bash
git commit -m "Deploy all changes"
```

Press Enter.

**What do you see?**
- If it says "nothing to commit" → Your changes are already committed, go to STEP 3
- If it says "X files changed" → Good! Go to STEP 3

---

## STEP 3: Push to GitHub

### 3.1 Try to Push
Copy and paste:

```bash
git push origin main
```

Press Enter.

### 3.2 If Push Succeeds
If you see "Writing objects" and "done" → **SUCCESS!** Go to STEP 4.

### 3.3 If Push Fails - Check Remote
If you see an error, run:

```bash
git remote -v
```

Press Enter.

**What do you see?**
- If you see `origin https://github.com/charmaineregina77/runforestrun.git` → Go to STEP 3.4
- If you see nothing or an error → Run this:

```bash
git remote add origin https://github.com/charmaineregina77/runforestrun.git
git branch -M main
git push -u origin main
```

### 3.4 If Authentication Fails
If you see "authentication failed":
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "Vercel Deploy"
4. Select scope: `repo`
5. Click "Generate token"
6. Copy the token
7. When git asks for password, paste the token (not your password)

---

## STEP 4: Check GitHub

### 4.1 Open GitHub
Go to: https://github.com/charmaineregina77/runforestrun

### 4.2 Check for New Files
Look for these files:
- `src/app/agents/page.tsx` ✅
- `src/app/success/page.tsx` ✅
- `src/components/AgentCard.tsx` ✅

**If you see them** → Go to STEP 5
**If you DON'T see them** → Go back to STEP 2

---

## STEP 5: Check Vercel

### 5.1 Open Vercel Dashboard
Go to: https://vercel.com/dashboard

### 5.2 Click Your Project
Click on `runforestrun` project

### 5.3 Check Deployments
Click "Deployments" tab

**What do you see?**
- New deployment with "Building" status → Wait 1-2 minutes, then go to STEP 6
- No new deployment → Go to STEP 5.4

### 5.4 Manual Redeploy
If no new deployment:
1. Click "..." on the latest deployment
2. Click "Redeploy"
3. Wait 1-2 minutes

---

## STEP 6: Visit Your Site

### 6.1 Get Your URL
In Vercel dashboard, find your deployment URL:
- It will be something like: `runforestrun-xxxxx.vercel.app`
- Or: `runforestrun-usethis.vercel.app`

### 6.2 Visit the URL
Open it in your browser

### 6.3 Check for Changes
Look for:
- ✅ White background (not gray)
- ✅ "Success" link in navigation (top right)
- ✅ "Find Experts" link in navigation

### 6.4 Test New Pages
Try visiting:
- `your-url.vercel.app/agents`
- `your-url.vercel.app/success`
- `your-url.vercel.app/onboarding/enhanced`

---

## STEP 7: If Still Not Working

### 7.1 Check Browser Console
1. Press `F12` on your keyboard
2. Click "Console" tab
3. Look for red error messages
4. Copy any errors you see

### 7.2 Check Vercel Logs
1. Go to Vercel dashboard
2. Click your project
3. Click "Deployments"
4. Click the latest deployment
5. Click "Logs" tab
6. Look for errors
7. Copy any errors you see

### 7.3 Tell Me
Share with me:
1. What step you're stuck on
2. What error messages you see
3. What you see when you visit the site

---

## Quick Checklist

- [ ] STEP 1: Checked git status
- [ ] STEP 2: Added and committed files
- [ ] STEP 3: Pushed to GitHub successfully
- [ ] STEP 4: Verified files are on GitHub
- [ ] STEP 5: Checked Vercel for new deployment
- [ ] STEP 6: Visited site and checked for changes
- [ ] STEP 7: (If needed) Checked for errors

Start with STEP 1 and tell me what you see at each step!
