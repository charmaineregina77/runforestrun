# Post-Deployment Checklist - Run Forest Run

## ✅ Deployment Complete!

Your app is now live on Vercel! 🎉

## 🔍 Verification Steps

### 1. Check Your Live URL

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Click on your `runforestrun` project
3. You should see a URL like: `runforestrun.vercel.app` or `runforestrun-xxxxx.vercel.app`
4. **Click the URL** to visit your live app

### 2. Verify the App Loads

- ✅ Homepage should load
- ✅ No error messages in the browser
- ✅ Check browser console (F12) for any errors

### 3. Check Database Connection

**Important**: Make sure you've run the database schema!

1. Go to: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn/sql/new
2. If you haven't already, run `supabase/schema.sql`
3. Verify tables exist in **Table Editor**

### 4. Test the App

- Try navigating to different pages
- Check if data loads (if you added demo data)
- Verify Supabase connection is working

## 🐛 Troubleshooting

### App Shows Errors?

**Check Vercel Logs:**
1. Vercel Dashboard → Your Project → **Deployments**
2. Click on the latest deployment
3. Click **"Logs"** tab
4. Look for error messages

**Common Issues:**

1. **"Supabase keys are missing"**
   - Go to Vercel → Settings → Environment Variables
   - Verify all 3 variables are set:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE_KEY`

2. **Database connection errors**
   - Verify database schema was run in Supabase
   - Check Supabase project is not paused
   - Verify environment variables are correct

3. **Build errors**
   - Check build logs in Vercel
   - Verify `package.json` is correct
   - Check for TypeScript errors

### App Loads But Shows Empty Data?

- Make sure database schema is set up
- (Optional) Run `supabase/seed.sql` for demo data
- Check Supabase Table Editor to see if tables have data

## 📊 Next Steps

### 1. Set Up Demo Data (Optional)

If you want to see the app with sample data:

1. Go to Supabase SQL Editor
2. Copy contents of `supabase/seed.sql`
3. Paste and run
4. Add environment variable in Vercel:
   - `DEMO_OWNER_ID` = `11111111-1111-1111-1111-111111111111`
5. Redeploy (or wait for auto-deploy)

### 2. Custom Domain (Optional)

1. Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration

### 3. Monitor Your App

- Check Vercel Analytics (if enabled)
- Monitor Supabase usage
- Set up error tracking (optional)

## 🎉 Congratulations!

Your Run Forest Run app is live! 

**Your app URL**: Check Vercel dashboard for your deployment URL

## 📝 Quick Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Supabase Dashboard**: https://supabase.com/dashboard/project/cttoedvsuokbrgzooqrn
- **GitHub Repo**: https://github.com/charmaineregina77/runforestrun

## 🆘 Need Help?

If you encounter any issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify all environment variables are set
4. Ensure database schema is run
