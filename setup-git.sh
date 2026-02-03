#!/bin/bash

# Script to set up git and prepare for GitHub deployment

cd "$(dirname "$0")"

echo "🚀 Setting up git repository for Run Forest Run..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Check if there are changes to commit
if [ -n "$(git status --porcelain)" ]; then
    echo "💾 Committing changes..."
    git commit -m "Prepare for Vercel deployment - Add role system and comprehensive task library"
    echo "✅ Changes committed"
else
    echo "ℹ️  No changes to commit"
fi

# Check if remote exists
if git remote | grep -q "origin"; then
    echo "✅ Remote 'origin' already exists"
    echo "Current remote URL:"
    git remote -v
else
    echo ""
    echo "⚠️  No GitHub remote configured yet"
    echo ""
    echo "To connect to GitHub:"
    echo "1. Create a new repository on GitHub (github.com/new)"
    echo "2. Then run:"
    echo "   git remote add origin YOUR_GITHUB_REPO_URL"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
fi

echo ""
echo "📊 Current git status:"
git status

echo ""
echo "✨ Done! Next steps:"
echo "1. If you haven't created a GitHub repo yet, go to: https://github.com/new"
echo "2. Create a new repository (don't initialize with README)"
echo "3. Copy the repository URL"
echo "4. Run these commands:"
echo "   git remote add origin YOUR_REPO_URL"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
