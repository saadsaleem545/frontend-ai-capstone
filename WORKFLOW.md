# AI-Assisted Workflow Comparison

## Overview

This exercise compared two approaches to building the same settings-form feature. Round 1 used a deliberately vague prompt, while Round 2 used a precise prompt with requirements, constraints, file structure, accessibility expectations, edge cases, and verification.

## Round 1: Vague Prompt

The first round produced a settings form focused mainly on UI structure and interaction. It used React state for profile, notification, appearance, and privacy settings. However, validation was not separated into a reusable module and there was no dedicated automated test suite.

The main review effort was therefore focused on checking whether the generated UI actually met the intended behavior. The implementation was usable, but it provided less explicit evidence that edge cases had been considered.

## Round 2: Precise Prompt

The second round produced a more structured implementation. Validation was moved into a separate `validation.js` module with individual functions for name, email, and bio validation. The form also tracks touched fields and displays validation errors only when appropriate.

The precise workflow also required verification. A dedicated `validation.test.js` file was created with 22 tests covering normal cases and edge cases, including empty names, whitespace-only names, invalid email formats, surrounding email whitespace, and the 160-character bio boundary.

Running:

    node src/validation.test.js

produced:

    22 passed, 0 failed

This made correctness easier to verify than relying only on manual inspection.

## Accessibility and Edge Cases

Round 2 also provided stronger accessibility evidence. Invalid fields use `aria-invalid`, error messages are connected with `aria-describedby`, and validation messages use `role="alert"`. The form also uses labels connected to their inputs.

The tests specifically cover boundary conditions rather than only normal input. For example, a bio of exactly 160 characters is accepted while 161 characters is rejected.

## AI Mistake and Review

One issue I caught during the workflow was that the generated validation code was placed in a separate `validation.js` dependency. The generated artifact environment could not load that dependency automatically. I therefore had to integrate the generated files into the actual Vite project and verify them locally.

This reinforced the main lesson of the exercise: AI output still needs to be reviewed, integrated, and tested rather than accepted simply because the generated code looks complete.

## Conclusion

The precise workflow required more planning before generation, but it produced code that was easier to verify and review. The biggest improvement was not simply the amount of code; it was the presence of explicit validation logic, edge-case tests, and a verification step that turned assumptions into evidence.