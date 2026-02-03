#!/bin/bash

# Quick deploy script - commits and pushes all changes

cd /Users/charmaineregina/Documents/Codex/runforestrun

echo "📦 Adding all changes..."
git add .

echo "💾 Committing changes..."
git commit -m "Update background to white and add Phase 2 features (agents, success scoring, enhanced onboarding)"

echo "📤 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Done! Vercel will auto-deploy in 1-2 minutes."
echo "Check: https://vercel.com/dashboard"
