#!/bin/bash

# Quick Deploy Script for Run Forest Run
# This will commit and push all changes to GitHub, triggering Vercel auto-deploy

echo "🚀 Deploying Run Forest Run to Vercel..."
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Initializing..."
    git init
fi

# Check git status
echo "📊 Checking git status..."
git status

echo ""
echo "📦 Adding all files..."
git add .

echo ""
echo "💾 Committing changes..."
git commit -m "Deploy Phase 2: Agent marketplace and success scoring features" || echo "No changes to commit"

echo ""
echo "📤 Pushing to GitHub..."
git push origin main || {
    echo ""
    echo "⚠️  Push failed. Checking remote..."
    git remote -v
    
    echo ""
    echo "If remote is not set, run:"
    echo "  git remote add origin https://github.com/charmaineregina77/runforestrun.git"
    echo "  git branch -M main"
    echo "  git push -u origin main"
}

echo ""
echo "✅ Done! Vercel should auto-deploy in 1-2 minutes."
echo ""
echo "📋 Next steps:"
echo "1. Check Vercel dashboard: https://vercel.com/dashboard"
echo "2. Run database migrations in Supabase (see DEPLOY_NOW.md)"
echo "3. Visit your live URL when deployment completes!"
echo ""
