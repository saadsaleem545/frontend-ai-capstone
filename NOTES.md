# shadcn/ui Accessibility Notes

## Comparison

I first built the modal dialog, tabs, and disclosure components manually in React and TypeScript without using a component library. After testing the components with the keyboard, I installed shadcn/ui and reviewed its generated Dialog and Tabs source.

## What shadcn/ui handled better

### 1. Focus management

My manually built modal required me to think about focus behavior myself. A production-quality dialog needs to manage where focus goes when the dialog opens, keep keyboard focus inside the dialog while it is open, and return focus to the triggering element when it closes.

The shadcn Dialog implementation provides a more complete foundation for these behaviors through its underlying component primitives.

### 2. Accessibility and interaction details

My manual Tabs component handled the main arrow-key, Home, and End interactions, but shadcn's generated Tabs component provides a more complete implementation of the accessibility pattern and interaction states.

It also separates the tab root, list, trigger, and content into reusable components, making the implementation easier to compose.

### 3. Reusable component structure

My manual components were designed specifically for this playground. shadcn generates reusable components with separate building blocks and consistent APIs, which makes them easier to reuse in a larger application.

## What I learned

Building the components manually first made it easier to understand what an accessibility component library is actually solving. The generated shadcn source is not magic; it provides tested interaction patterns and reusable abstractions that reduce the amount of accessibility behavior I need to implement from scratch.

I would still review the generated source instead of blindly trusting a component library, especially when accessibility and keyboard behavior are important.
