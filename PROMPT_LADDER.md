# Prompt Ladder

## Project

React Settings Form

## Purpose

This ladder shows how adding one prompt layer at a time changed the requirements for a React settings form.

---

# Run 0 — Baseline

### Layer

None

### Prompt

> Mujhe aik setting form banana hai bana ker do

### Representative Output

A basic settings form implementation with no clearly defined audience, project context, required sections, output structure, or verification requirements.

### What changed?

Nothing. This was the intentionally weak baseline.

### What improved in the output?

The output attempted to solve the general request, but it had very little information about what the form actually needed to do.

### What still failed?

The requirements were too vague. There was no clear definition of the user, the purpose of the form, the settings it should contain, or how correctness should be checked.

### What I would try next

Define the goal of the form.

---

# Run 1 — Clearer Goal

### Layer

Clearer goal

### Prompt

> Mujhe React mein aik settings form banana hai jahan user apni profile information aur settings change kar sake. Form bana kar do.

### Representative Output

A React settings form focused on allowing users to edit profile information and settings.

### What changed?

The goal was made explicit.

### What improved in the output?

The implementation had a clearer purpose instead of treating the request as just a generic form.

### What still failed?

The output still did not know who would review the project or exactly which settings the form needed.

### What I would try next

Define the audience.

---

# Run 2 — Defined Audience

### Layer

Defined audience

### Prompt

> Mujhe React mein aik settings form banana hai jahan user apni profile information aur settings change kar sake. Form bana kar do. Ye form aik junior frontend developer ke portfolio project ke liye hai, jise technical lead review karega.

### Representative Output

A portfolio-oriented React settings form intended to demonstrate frontend development skills to a technical reviewer.

### What changed?

The prompt now identified the audience as a technical lead reviewing a junior frontend portfolio project.

### What improved in the output?

The project had a clearer reason for existing. The implementation could now be judged as portfolio work rather than only as a generic form.

### What still failed?

The actual product requirements were still not specific enough.

### What I would try next

Add the real settings the form needs to contain.

---

# Run 3 — Real Context

### Layer

Real context

### Prompt

> Mujhe React mein aik settings form banana hai jahan user apni profile information aur settings change kar sake. Form bana kar do. Ye form aik junior frontend developer ke portfolio project ke liye hai, jise technical lead review karega. Form mein profile information, notifications, appearance aur privacy settings honi chahiye.

### Representative Output

A settings form containing separate areas for profile information, notifications, appearance, and privacy.

### What changed?

The actual sections required by the project were specified.

### What improved in the output?

The result became much closer to the feature I actually wanted. It was no longer just a generic settings form.

### What still failed?

The response could still choose its own code organization and validation approach.

### What I would try next

Specify the expected output structure.

---

# Run 4 — Specified Output Format

### Layer

Specified output format

### Prompt

> Mujhe React mein aik settings form banana hai jahan user apni profile information aur settings change kar sake. Form bana kar do. Ye form aik junior frontend developer ke portfolio project ke liye hai, jise technical lead review karega. Form mein profile information, notifications, appearance aur privacy settings honi chahiye. Code ko React component, CSS aur required validation logic mein organize karo.

### Representative Output

The implementation was organized into a React component, CSS, and separate validation logic.

### What changed?

The expected code organization was explicitly specified.

### What improved in the output?

The generated work became easier to understand and review because the component, styling, and validation responsibilities were separated.

### What still failed?

The prompt still trusted the generated validation without explicitly requiring the AI to prove that it worked.

### What I would try next

Add a verification requirement.

---

# Run 5 — Verification

### Layer

Verification requirements

### Prompt

> Mujhe React mein aik settings form banana hai jahan user apni profile information aur settings change kar sake. Form bana kar do. Ye form aik junior frontend developer ke portfolio project ke liye hai, jise technical lead review karega. Form mein profile information, notifications, appearance aur privacy settings honi chahiye. Code ko React component, CSS aur required validation logic mein organize karo. Validation ke liye tests bhi likho aur implementation ke baad tests run karke batao ke kya pass aur fail hua.

### Representative Output

The implementation included separate validation logic and automated tests for the profile fields.

The tests covered required fields, invalid email addresses, valid email addresses, and bio length boundaries.

### What changed?

A verification requirement was added.

### What improved in the output?

The result was no longer based only on whether the generated code looked correct. The validation could be checked with actual tests.

### What still failed?

The prompt still does not specify every possible product requirement or every UI design decision. Those decisions still need human review.

### Verification Result

The validation tests produced:

**22 passed, 0 failed.**

This gave me concrete evidence that the validation cases I had defined were working.

### What I would try next

For a future iteration, I would add more explicit accessibility and UI behavior requirements and verify those manually in the browser.

---

# What I Learned

The biggest improvement did not come from making the prompt longer by itself. It came from adding information that reduced uncertainty for the AI.

The goal explained what I wanted.

The audience explained who would evaluate it.

The context explained what the form needed to contain.

The output format explained how the implementation should be organized.

The verification requirement changed the task from simply generating code to generating code that could be checked.

The final step was especially useful because the validation tests gave me evidence instead of requiring me to trust the generated code.

---

# Final Reusable Prompt

> Build a React settings form where users can manage their profile information and settings.
>
> This is a portfolio project for a junior frontend developer and will be reviewed by a technical lead.
>
> The form should include:
> - Profile information
> - Notifications
> - Appearance
> - Privacy settings
>
> Organize the implementation into a React component, CSS, and separate validation logic.
>
> Required profile validation:
> - Name cannot be empty.
> - Email cannot be empty and must use a valid email format.
> - Bio is optional but must not exceed 160 characters.
>
> Keep the validation logic separate from the React component so it can be tested independently.
>
> Write automated tests covering normal cases, invalid inputs, and boundary cases.
>
> After implementing the feature, run the tests and report the exact number of passed and failed tests. Do not claim a test passed unless it was actually run.
>
> Also identify any assumptions or issues you think should be reviewed manually in the browser.