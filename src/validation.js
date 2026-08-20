// validation.js
// Pure validation functions for the Settings form's Profile fields.
// Kept dependency-free and framework-free so they can be unit tested
// in isolation from React.

export const BIO_MAX_LENGTH = 160;

// Practical (not fully RFC 5322) email check: local part, single "@",
// domain with at least one dot, no whitespace anywhere.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @param {string} name
 * @returns {string} error message, or '' if valid
 */
export function validateName(name) {
  if (!name || !name.trim()) {
    return 'Name is required.';
  }
  return '';
}

/**
 * @param {string} email
 * @returns {string} error message, or '' if valid
 */
export function validateEmail(email) {
  const trimmed = (email || '').trim();
  if (!trimmed) {
    return 'Email is required.';
  }
  if (!EMAIL_RE.test(trimmed)) {
    return 'Enter a valid email address (e.g. name@example.com).';
  }
  return '';
}

/**
 * Bio is optional, but if present must not exceed BIO_MAX_LENGTH.
 * @param {string} bio
 * @returns {string} error message, or '' if valid
 */
export function validateBio(bio) {
  const value = bio || '';
  if (value.length > BIO_MAX_LENGTH) {
    return `Bio must be ${BIO_MAX_LENGTH} characters or fewer (currently ${value.length}).`;
  }
  return '';
}

/**
 * Validates the whole profile section at once.
 * @param {{name: string, email: string, bio: string}} profile
 * @returns {{name: string, email: string, bio: string}} error map (empty strings = valid)
 */
export function validateProfile(profile) {
  return {
    name: validateName(profile.name),
    email: validateEmail(profile.email),
    bio: validateBio(profile.bio),
  };
}

/**
 * @param {{name: string, email: string, bio: string}} errors
 * @returns {boolean} true if there are no error messages
 */
export function isProfileValid(errors) {
  return Object.values(errors).every((msg) => msg === '');
}