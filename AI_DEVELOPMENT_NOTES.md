# React App Development with AI

## 1. Application

I built a React-based Settings Form as a frontend portfolio project.

The application allows a user to manage:

- Profile information
- Preferences and appearance
- Notification settings
- Security and privacy-related settings
- Password settings

The project was developed using React and organized into reusable components and separate validation logic.

## 2. What I Built

The application includes a tabbed settings interface with four sections:

1. Profile
2. Preferences
3. Notifications
4. Security

The Profile section allows the user to update their name, username, email, and bio.

The Preferences section allows the user to change theme, language, and timezone.

The Notifications section allows the user to enable or disable different notification types.

The Security section includes password fields and a two-factor authentication setting.

The form also tracks unsaved changes and provides Save and Discard actions.

## 3. AI Prompts Used

I used AI as a development assistant throughout the project.

The initial prompt was:

> Build me a React settings form where users can change their profile and settings.

I then improved the prompt by adding project context:

> This is a junior frontend developer portfolio project that will be reviewed by a technical lead. The form should demonstrate practical frontend skills, clear state management, accessibility, useful validation, and maintainable component structure.

I then added specific requirements for validation:

> Empty name should show a required-field error. Invalid email should show an invalid-email error. Bio should have a character limit. Password confirmation should be validated.

I also asked AI to organize the implementation into separate files:

> Organize the implementation into a React component, CSS, validation logic, and validation tests.

Finally, I asked AI to run the tests and report the exact number of passed and failed tests.

## 4. How AI Assisted

AI helped me during several stages of development.

First, it helped generate the initial React settings form structure.

Second, it suggested reusable UI components for inputs, text areas, selects, switches, and form fields.

Third, AI helped design validation rules for required fields, email format, username format, bio length, and password confirmation.

Fourth, it helped separate validation logic from the React UI so that the validation could be tested independently.

AI also helped create automated validation tests and suggested accessibility improvements such as labels and ARIA attributes.

I reviewed the generated code instead of using it blindly and tested the implementation locally.

## 5. Manual Improvements

After reviewing the AI-generated implementation, I made and verified several improvements.

### Validation

I checked that users could not submit incomplete profile information.

I verified that invalid email addresses were rejected.

I also verified password confirmation behavior and the bio character limit.

### State and Save Behavior

I reviewed the dirty-state logic so that the application could detect when settings had actually changed.

The Save button is disabled when there are no changes and the application displays a saving state while the save operation is simulated.

### Code Organization

I kept validation logic separate from the main React component in:

`src/validation.js`

The validation tests are stored separately in:

`src/validation.test.js`

The main settings interface is implemented in:

`src/SettingsForm.jsx`

## 6. Corrections and Refactoring

One important improvement was moving validation into a separate function instead of keeping all validation rules directly inside the UI.

This made the validation easier to understand and test.

I also reviewed the generated form behavior and made sure validation errors were visible to the user rather than only appearing in the console.

Another important correction was being explicit about simulated functionality.

The current save operation simulates an API request rather than pretending that a real backend API exists.

The avatar/photo control is also currently a UI control and is not connected to a real file-upload service.

## 7. Testing

The validation logic was tested after implementation.

The final validation test result was:

**22 tests passed, 0 tests failed.**

The tests covered valid and invalid values, including:

- Required fields
- Whitespace input
- Valid email addresses
- Invalid email addresses
- Username validation
- Bio length boundaries
- Password validation
- Password confirmation

The test results gave me a way to verify the implementation instead of relying only on how the interface looked.

## 8. AI Development Workflow

My development workflow was:

1. Start with a simple prompt.
2. Review the generated implementation.
3. Identify missing requirements.
4. Improve the prompt with more specific requirements.
5. Generate or modify the implementation.
6. Review the generated code.
7. Test the validation behavior.
8. Make corrections where necessary.
9. Run the automated tests.
10. Document the final implementation.

This showed me that AI works better as a development assistant when I provide clear requirements and verify the generated result.

## 9. Final Reflection

The main lesson from this project was that generating code is only one part of AI-assisted development.

The quality of the result improved when I gave AI more context, specific requirements, examples, file organization, and verification criteria.

I also learned that AI-generated code still needs human review.

Testing the validation logic helped me identify whether the implementation actually behaved as expected.

For a production version, I would connect the save operation to a real backend API and implement actual avatar uploading.
