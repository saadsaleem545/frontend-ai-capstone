# Framed Cases

## Voice Card

Clear, practical, honest, technical, confident, no hype.

---

# Settings Form

## The Problem

I wanted to make a settings form where a user can change the settings they want from one place. The user should be able to manage their information, change the theme, control notifications, and manage privacy settings.

## What I Did

I built the settings form in React with different sections for profile, notifications, appearance, and privacy.

For the profile section, I added fields for name, email, and bio. I added validation because the user should not be able to submit required information incorrectly. For example, an empty name or email should show an error, and an invalid email should be rejected.

I also added validation for the bio length. The validation logic was separated into `validation.js` so it could be tested separately from the React form.

For the other settings, I added notification controls, theme selection, profile visibility, and activity-status controls.

I checked the form manually in the browser to make sure the interactions and error messages worked. I also created automated validation tests and ran them locally.

## What Came of It

The validation tests produced **22 passed and 0 failed**. This confirmed that the validation cases I had defined were behaving as expected.

The form also gives the user one place to change profile information, theme, notifications, and privacy settings instead of handling these settings separately.

---

# What I Learned From the AI Workflow

I built the feature through two AI-assisted approaches.

The first round used a vague prompt. The second round used a more precise prompt with requirements and verification.

The important difference for me was the verification step. Instead of only looking at generated code, I separated the validation logic and wrote tests for it. This gave me something I could actually check instead of simply assuming the generated code was correct.

The final test run showed 22 passed and 0 failed.

---

# Bio

I am a junior frontend developer working on improving my JavaScript and React skills. I focus on building practical frontend features and learning by actually building and testing them.

I am looking for an internship or junior frontend opportunity where I can contribute to real projects and continue improving my frontend development skills.

---

# Contact / CTA

Have a junior frontend or internship opportunity?

**Contact me directly to start a conversation.**

---

# Before / After

## Before — Generic AI Copy

> I built a robust and user-friendly settings experience that empowers users to manage their preferences seamlessly.

## After — My Version

> I made a settings form where users can change their information, theme, notifications, and privacy settings in one place.