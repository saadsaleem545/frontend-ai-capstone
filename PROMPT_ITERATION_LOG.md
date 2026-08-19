# Prompt Iteration Log — React Settings Form

## Task

Build a React settings form where users can manage their profile information and account settings.

This is a real frontend portfolio task. The form allows users to update profile information, preferences, notifications, and security/privacy-related settings.

The goal was to improve the prompt step by step and observe how each prompting technique affected the actual output.

---

# Version 0 — Naive Baseline

## Technique

Naive prompt — no deliberate prompting technique.

## Prompt

> Build me a React settings form where users can change their profile and settings.

## Representative Output

The AI produced a React settings interface where users could manage profile information and different account settings.

The initial concept included:

- Profile settings
- Preferences
- Notifications
- Security settings
- Save functionality
- React state management
- Basic form inputs

## What Changed?

This was the original simple prompt. No role, context, examples, output structure, or verification requirements were provided.

## What Improved in the Output?

The AI was able to understand the general idea and produce a usable settings form without much information.

## What Still Failed?

The requirements were too vague. Important details such as:

- Which fields were required
- How email validation should work
- How invalid input should be displayed
- How password validation should work
- How the code should be organized
- Whether tests were required

were left to the AI to decide.

## What I Would Try Next

Give the AI a specific development role so it approaches the task from an experienced frontend perspective.

---

# Version 1 — Role Assignment

## Technique

Role assignment.

## Prompt

> You are an experienced React frontend developer. Build me a React settings form where users can change their profile and settings.

## Representative Output

The AI produced a more structured React implementation.

The output included ideas such as:

- React state management
- Reusable form components
- Profile fields
- Preferences
- Notifications
- Security settings
- Save and discard behavior
- Validation

## What Changed?

I added one layer:

> "You are an experienced React frontend developer."

## What Improved in the Output?

The output became more engineering-focused instead of being only a basic visual form.

The AI started considering maintainability, reusable components, validation, and better state management.

## What Still Failed?

The AI still had to guess important requirements.

For example, it could choose its own:

- Validation rules
- File structure
- Fields
- Error messages
- Testing approach

## What I Would Try Next

Give the AI real project context and explain who will review the project and why it is being built.

---

# Version 2 — Context and Motivation

## Technique

Context and motivation.

## Prompt

> You are an experienced React frontend developer. Build me a React settings form where users can change their profile and settings.
>
> This is a junior frontend developer portfolio project that will be reviewed by a technical lead. The form should demonstrate practical frontend skills, clear state management, accessibility, useful validation, and maintainable component structure.

## Representative Output

The output became more focused on frontend engineering quality.

The implementation considered:

- Maintainable React structure
- Accessibility
- Form validation
- Clear state management
- User-friendly error messages
- Portfolio-quality UI

## What Changed?

I added the project context and motivation.

The AI now knew:

- This is a portfolio project
- The developer is junior-level
- A technical lead will review it
- Code quality matters

## What Improved in the Output?

The AI had a clearer reason to prioritize maintainability and quality instead of only creating something that looked like a settings page.

## What Still Failed?

The requirements were still not precise enough.

For example, different AI models could make different assumptions about:

- Email validation
- Password validation
- Bio limits
- Required fields
- Tests
- Exact file organization

## What I Would Try Next

Give concrete examples of expected behavior.

---

# Version 3 — Few-Shot Examples

## Technique

Few-shot examples.

## Prompt

> You are an experienced React frontend developer. Build me a React settings form where users can change their profile and settings.
>
> This is a junior frontend developer portfolio project that will be reviewed by a technical lead. The form should demonstrate practical frontend skills, clear state management, accessibility, useful validation, and maintainable component structure.
>
> Expected validation behavior:
>
> - Empty name → show a required-field error.
> - Empty email → show a required-field error.
> - Invalid email such as `userexample.com` → show an invalid-email error.
> - Bio longer than 160 characters → show a character-limit error.
> - New password and confirmation do not match → show a password mismatch error.
> - Valid profile information → allow saving.

## Representative Output

The output became more specific about validation behavior.

The AI now had examples of exactly what should happen when users entered invalid information.

## What Changed?

I added examples showing input conditions and their expected results.

## What Improved in the Output?

The validation requirements became much clearer.

Instead of allowing the AI to invent validation behavior, the examples showed exactly what I expected.

This helped produce useful validation for:

- Required name
- Email format
- Bio length
- Password confirmation

## What Still Failed?

The AI could still decide how the project should be organized.

It was clear what the form should do, but not exactly how the code should be separated into files.

## What I Would Try Next

Specify the required output structure and testing requirements.

---

# Version 4 — Output Structure

## Technique

Output structure.

## Prompt

> You are an experienced React frontend developer. Build me a React settings form where users can change their profile and settings.
>
> This is a junior frontend developer portfolio project that will be reviewed by a technical lead. The form should demonstrate practical frontend skills, clear state management, accessibility, useful validation, and maintainable component structure.
>
> Expected validation behavior:
>
> - Empty name → show a required-field error.
> - Empty email → show a required-field error.
> - Invalid email such as `userexample.com` → show an invalid-email error.
> - Bio longer than 160 characters → show a character-limit error.
> - New password and confirmation do not match → show a password mismatch error.
> - Valid profile information → allow saving.
>
> Organize the implementation into:
>
> 1. `SettingsForm.jsx` — React component and form behavior.
> 2. `SettingsForm.css` — styling.
> 3. `validation.js` — validation logic.
> 4. `validation.test.js` — validation tests.
>
> After implementation, run the tests and report exactly how many passed and failed.

## Representative Output

The output became much closer to the actual project structure.

The project contained:

- `SettingsForm.jsx`
- `SettingsForm.css`
- `validation.js`
- `validation.test.js`

The validation tests covered multiple cases.

Actual test result:

22 passed, 0 failed


What Changed?

I specified exactly how the implementation should be organized and explicitly required validation tests.

What Improved in the Output?

The code became easier to maintain and review.

Separating validation into validation.js meant the validation logic could be tested independently from the React UI.

The test requirement also provided measurable evidence that the validation worked.

What Still Failed?

The prompt was becoming better, but it still asked the AI to handle many tasks at once.

There was still a possibility that some requirements could be missed during implementation.

What I Would Try Next

Break the task into explicit steps so the AI works through requirements, implementation, validation, and verification systematically.

Version 5 — Step Decomposition
Technique

Step decomposition.

Prompt

You are an experienced React frontend developer working on a junior frontend developer portfolio project that will be reviewed by a technical lead.

Build a React settings form where users can update their profile information and settings.

Follow these steps in order:

Define the requirements for profile information, notifications, appearance/preferences, and privacy/security settings.
Design the React state structure and explain how changes and unsaved state will be tracked.
Implement the React form in SettingsForm.jsx.
Implement styling in SettingsForm.css.
Put dependency-free validation logic in validation.js.
Validate required name, valid email, and bio length.
If password settings are included, validate password confirmation.
Create validation.test.js covering valid and invalid values, whitespace, invalid emails, valid emails, and bio boundary cases.
Make the form accessible using labels, error messages, and appropriate ARIA attributes.
Prevent saving when validation fails.
Show saving and successful-save states.
Run the validation tests and report the exact pass/fail result.
Do not claim backend/API functionality unless it is actually implemented.

Keep the implementation practical for a junior frontend portfolio project and avoid unnecessary libraries.

Representative Output

The final implementation became much more predictable and aligned with the actual project requirements.

The resulting settings form included:

Profile information
Name validation
Email validation
Bio validation
Notifications
Appearance/preferences
Privacy/security settings
Password validation
Save behavior
Discard behavior
Accessible error messages
Separate validation logic
Automated validation tests

The actual validation test result was:

22 passed, 0 failed
What Changed?

I decomposed the task into explicit steps.

What Improved in the Output?

The AI had fewer opportunities to miss important requirements.

The process became easier to verify because each major requirement had a specific step.

The final implementation was also easier to review as a portfolio project because the validation and tests provided evidence instead of only relying on visual output.

What Still Failed?

The implementation still simulated saving rather than connecting to a real backend/API.

The avatar/photo control was also UI-only.

These limitations were acceptable because the project was focused on frontend settings-form functionality, and the implementation did not falsely claim that a backend existed.

What I Would Try Next

For a production version, I would connect the save operation to a real API and add integration tests for the complete form interaction.

Cross-Model Comparison — Claude vs ChatGPT

I compared the final prompt approach across Claude and ChatGPT.

Tone

Both models produced professional frontend-oriented responses when the prompt included the portfolio and technical-review context.

The biggest difference was not the model itself but how specific the prompt was.

Accuracy

ChatGPT became more precise when the prompt explicitly defined validation rules and test requirements.

Claude also produced strong results, especially for UI and component organization, but vague requirements allowed more assumptions.

Structure

Both models could produce a complete settings form.

The strongest results came when the prompt explicitly required:

React component
CSS
Validation logic
Tests
Test execution
Exact pass/fail reporting
Failure Points

Both models could make assumptions when the prompt was vague.

Examples include:

Sample user information
UI-only avatar functionality
Simulated saving
Different validation rules
Different project structures

This showed that prompt specificity was more important than simply asking for "better code."

Overall Result

The final prompt produced a more reliable and reviewable implementation because it included:

Role
Context
Examples
Output structure
Step decomposition
Verification requirements
Final Reusable Prompt

You are an experienced React frontend developer working on a [PROJECT TYPE] that will be reviewed by [AUDIENCE].

Goal

Build [DESCRIBE THE TASK].

Context

This project is being built for [PURPOSE]. Prioritize [QUALITY REQUIREMENTS].

Requirements

Include:

[REQUIREMENT 1]
[REQUIREMENT 2]
[REQUIREMENT 3]
[REQUIREMENT 4]
Expected Behavior

Use these examples:

[INVALID INPUT] → [EXPECTED ERROR/BEHAVIOR]
[INVALID INPUT] → [EXPECTED ERROR/BEHAVIOR]
[VALID INPUT] → [EXPECTED BEHAVIOR]
Output Structure

Organize the implementation into:

[COMPONENT FILE]
[STYLE FILE]
[VALIDATION FILE]
[TEST FILE]
Implementation Steps
Identify the requirements.
Plan the state structure.
Implement the main component.
Add styling.
Add validation.
Add tests.
Run the tests.
Report the exact number of passed and failed tests.
Clearly identify anything that remains simulated or unimplemented.

Keep the solution appropriate for [SKILL LEVEL] and avoid unnecessary complexity.

Key Learning

This exercise showed me that a better prompt is not simply a longer prompt.

Each iteration had one specific purpose.

The naive prompt was enough to create a basic settings form, but it left many decisions to the AI.

Role assignment improved the engineering direction.

Context and motivation helped the AI understand why maintainability and quality mattered.

Few-shot examples made the expected validation behavior more concrete.

Output structure made the implementation easier to integrate and review.

Step decomposition made the implementation process more predictable and helped prevent missing requirements.

The most important lesson was that I should describe the desired outcome and verification criteria clearly instead of expecting the AI to guess them.

The final implementation produced a validation test result of:

22 passed, 0 failed.

The project still has limitations, such as simulated saving and a UI-only avatar control, but those limitations are explicit rather than being presented as completed backend functionality.