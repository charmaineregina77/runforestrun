"use client";

import { useState } from "react";
import Link from "next/link";

type ExperienceLevel = "none" | "some" | "experienced";
type Step = "welcome" | "product" | "experience" | "roles" | "complete";

export default function EnhancedOnboardingPage() {
  const [currentStep, setCurrentStep] = useState<Step>("welcome");
  const [formData, setFormData] = useState({
    productIdea: "",
    productCategory: "",
    experienceLevel: "" as ExperienceLevel | "",
    roles: [] as string[],
  });

  const handleNext = () => {
    const steps: Step[] = ["welcome", "product", "experience", "roles", "complete"];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: Step[] = ["welcome", "product", "experience", "roles", "complete"];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const toggleRole = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
    }));
  };

  const progress = {
    welcome: 0,
    product: 25,
    experience: 50,
    roles: 75,
    complete: 100,
  }[currentStep];

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>Step {["welcome", "product", "experience", "roles", "complete"].indexOf(currentStep) + 1} of 5</span>
          <span>{progress}% complete</span>
        </div>
        <div className="h-2 w-full rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-slate-900 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="glass rounded-3xl p-10">
        {currentStep === "welcome" && (
          <div className="space-y-6 text-center">
            <h1 className="text-4xl font-semibold">
              Welcome to Run Forest Run! 🚀
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              We're here to help you build a successful e-commerce business from the ground up. 
              Even if you've never done this before, we'll guide you every step of the way.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 text-left">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className="font-semibold">We'll help you figure out what to do</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    No guessing. We'll show you exactly what to work on next, and why it matters.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 text-left">
                <span className="text-2xl">👥</span>
                <div>
                  <h3 className="font-semibold">Connect you with the right people</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Need a designer? A developer? A marketer? We'll help you find experts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 text-left">
                <span className="text-2xl">📈</span>
                <div>
                  <h3 className="font-semibold">Track your success</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    We'll help you know if you're on track, and what to focus on to succeed.
                  </p>
                </div>
              </div>
            </div>
            <p className="pt-4 text-sm text-slate-500">
              This will take about 3 minutes. Let's get started!
            </p>
          </div>
        )}

        {currentStep === "product" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold">What are you building?</h2>
              <p className="mt-2 text-slate-600">
                Tell us about your product idea. Don't worry if it's not perfect yet - we'll help you refine it.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  What product are you selling?
                </label>
                <textarea
                  value={formData.productIdea}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, productIdea: e.target.value }))
                  }
                  className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-base"
                  placeholder="Example: A subscription box for eco-friendly home products"
                  rows={4}
                />
                <p className="mt-2 text-sm text-slate-500">
                  Just describe it in plain English. No need to be fancy!
                </p>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  What category is it? (optional)
                </label>
                <input
                  type="text"
                  value={formData.productCategory}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, productCategory: e.target.value }))
                  }
                  className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-base"
                  placeholder="Example: Wellness, Fashion, Tech, Home & Garden"
                />
              </div>
            </div>
          </div>
        )}

        {currentStep === "experience" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold">What's your experience level?</h2>
              <p className="mt-2 text-slate-600">
                This helps us personalize your roadmap. Be honest - there's no wrong answer!
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  value: "none" as ExperienceLevel,
                  title: "Complete Beginner",
                  description: "I've never built an e-commerce business before. This is all new to me.",
                  emoji: "🌱",
                },
                {
                  value: "some" as ExperienceLevel,
                  title: "Some Experience",
                  description: "I've tried building something before, or I know a bit about e-commerce.",
                  emoji: "🌿",
                },
                {
                  value: "experienced" as ExperienceLevel,
                  title: "Experienced",
                  description: "I've built e-commerce businesses before. I know the basics well.",
                  emoji: "🌳",
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, experienceLevel: option.value }))
                  }
                  className={`rounded-2xl border-2 p-6 text-left transition-all ${
                    formData.experienceLevel === option.value
                      ? "border-slate-900 bg-slate-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{option.emoji}</span>
                    <div>
                      <h3 className="font-semibold">{option.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === "roles" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-semibold">What roles do you need help with?</h2>
              <p className="mt-2 text-slate-600">
                Building an e-commerce business requires different skills. Which ones do you need help with?
                (You can select multiple)
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { id: "designer", name: "Designer", emoji: "🎨", desc: "Store design, branding, visuals" },
                { id: "developer", name: "Developer", emoji: "💻", desc: "Custom features, integrations" },
                { id: "marketer", name: "Marketer", emoji: "📢", desc: "Customer acquisition, growth" },
                { id: "media-buyer", name: "Media Buyer", emoji: "📱", desc: "Paid ads, campaigns" },
                { id: "data-analyst", name: "Data Analyst", emoji: "📊", desc: "Analytics, tracking, insights" },
                { id: "content-creator", name: "Content Creator", emoji: "✍️", desc: "Copy, messaging, content" },
                { id: "operations", name: "Operations", emoji: "📦", desc: "Fulfillment, shipping, logistics" },
                { id: "customer-success", name: "Customer Success", emoji: "💬", desc: "Support, retention" },
              ].map((role) => (
                <button
                  key={role.id}
                  onClick={() => toggleRole(role.id)}
                  className={`rounded-2xl border-2 p-4 text-left transition-all ${
                    formData.roles.includes(role.id)
                      ? "border-slate-900 bg-slate-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{role.emoji}</span>
                    <div>
                      <h3 className="font-semibold">{role.name}</h3>
                      <p className="mt-0.5 text-xs text-slate-600">{role.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {formData.roles.length > 0 && (
              <p className="rounded-2xl bg-blue-50 p-4 text-sm text-blue-900">
                Great! We'll help you find experts for: {formData.roles.join(", ")}
              </p>
            )}
          </div>
        )}

        {currentStep === "complete" && (
          <div className="space-y-6 text-center">
            <div className="text-6xl">🎉</div>
            <h2 className="text-3xl font-semibold">You're all set!</h2>
            <p className="mx-auto max-w-xl text-slate-600">
              We're creating your personalized roadmap based on your answers. 
              This will guide you from idea to first sale.
            </p>
            <div className="space-y-4 pt-4">
              <div className="rounded-2xl bg-slate-50 p-6 text-left">
                <h3 className="font-semibold">What happens next?</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>✅ Your personalized roadmap is ready</li>
                  <li>✅ You'll see your first 3 actions to get started</li>
                  <li>✅ We'll help you find experts when you need them</li>
                  <li>✅ Track your progress as you build</li>
                </ul>
              </div>
            </div>
            <Link
              href="/"
              className="inline-block rounded-2xl bg-slate-900 px-8 py-4 text-base font-semibold text-white"
            >
              Go to Your Dashboard →
            </Link>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {currentStep !== "welcome" && currentStep !== "complete" && (
        <div className="flex items-center justify-between">
          <button
            onClick={handleBack}
            className="rounded-2xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700"
          >
            ← Back
          </button>
          <button
            onClick={handleNext}
            disabled={
              (currentStep === "product" && !formData.productIdea) ||
              (currentStep === "experience" && !formData.experienceLevel)
            }
            className="rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white disabled:bg-slate-400"
          >
            Next →
          </button>
        </div>
      )}

      {currentStep === "welcome" && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white"
          >
            Get Started →
          </button>
        </div>
      )}
    </div>
  );
}
