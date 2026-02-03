# Vercel Environment Variables - Copy These

When deploying to Vercel, add these environment variables in the Vercel dashboard:

## Required Environment Variables

### 1. NEXT_PUBLIC_SUPABASE_URL
```
https://cttoedvsuokbrgzooqrn.supabase.co
```

### 2. NEXT_PUBLIC_SUPABASE_ANON_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNzc3OTUsImV4cCI6MjA4NTY1Mzc5NX0.sBfV0A8NEyc6NcAaUtpF0Ootu7wAD1L4lu-Nbz9lKms
```

### 3. SUPABASE_SERVICE_ROLE_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dG9lZHZzdW9rYnJnem9vcXJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA3Nzc5NSwiZXhwIjoyMDg1NjUzNzk1fQ.nH-HWjNrr1CtPvFe4N6Qkq0qrDbxsH5wjtmAXpBDSCk
```

## How to Add in Vercel

1. Go to your Vercel project
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: `https://cttoedvsuokbrgzooqrn.supabase.co`
   - **Environment**: Select all (Production, Preview, Development)
   - Click **Save**

4. Repeat for `NEXT_PUBLIC_SUPABASE_ANON_KEY` with the token above

5. For `SUPABASE_SERVICE_ROLE_KEY`:
   - Go to Supabase Dashboard → Settings → API
   - Find "service_role" key
   - Click "Reveal" to see it
   - Copy and paste it as the value

## Important Notes

⚠️ **Never commit these keys to Git!** They're already in `.gitignore`

✅ The anon key is safe to use in client-side code (that's why it's `NEXT_PUBLIC_`)

🔒 The service_role key should NEVER be exposed to the browser - it's server-side only
