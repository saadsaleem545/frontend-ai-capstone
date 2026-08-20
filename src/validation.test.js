// validation.test.js
// Plain Node assertion tests -- no test framework dependency needed,
// so this can run with just `node validation.test.js`.

import assert from 'node:assert/strict';
import {
  validateName,
  validateEmail,
  validateBio,
  validateProfile,
  isProfileValid,
  BIO_MAX_LENGTH,
} from './validation.js';

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    passed += 1;
    console.log(`  ok - ${description}`);
  } catch (err) {
    failed += 1;
    console.error(`  FAIL - ${description}`);
    console.error(`         ${err.message}`);
  }
}

console.log('validateName');
test('empty string is invalid', () => {
  assert.notEqual(validateName(''), '');
});
test('whitespace-only string is invalid', () => {
  assert.notEqual(validateName('   '), '');
});
test('undefined is invalid', () => {
  assert.notEqual(validateName(undefined), '');
});
test('normal name is valid', () => {
  assert.equal(validateName('Ada Lovelace'), '');
});
test('name with leading/trailing spaces but real content is valid', () => {
  assert.equal(validateName('  Ada  '), '');
});

console.log('validateEmail');
test('empty string is invalid', () => {
  assert.notEqual(validateEmail(''), '');
});
test('missing @ is invalid', () => {
  assert.notEqual(validateEmail('adaexample.com'), '');
});
test('missing domain TLD is invalid', () => {
  assert.notEqual(validateEmail('ada@example'), '');
});
test('missing local part is invalid', () => {
  assert.notEqual(validateEmail('@example.com'), '');
});
test('multiple @ is invalid', () => {
  assert.notEqual(validateEmail('a@b@example.com'), '');
});
test('embedded whitespace is invalid', () => {
  assert.notEqual(validateEmail('ada lovelace@example.com'), '');
});
test('valid simple email passes', () => {
  assert.equal(validateEmail('ada@example.com'), '');
});
test('valid email with subdomain and plus-tag passes', () => {
  assert.equal(validateEmail('ada+test@mail.example.co.uk'), '');
});
test('valid email with surrounding whitespace passes (trimmed)', () => {
  assert.equal(validateEmail('  ada@example.com  '), '');
});

console.log('validateBio');
test('empty bio is valid (optional field)', () => {
  assert.equal(validateBio(''), '');
});
test('bio under limit is valid', () => {
  assert.equal(validateBio('a'.repeat(BIO_MAX_LENGTH - 1)), '');
});
test('bio at exactly the limit is valid (boundary)', () => {
  assert.equal(validateBio('a'.repeat(BIO_MAX_LENGTH)), '');
});
test('bio one over the limit is invalid (boundary)', () => {
  assert.notEqual(validateBio('a'.repeat(BIO_MAX_LENGTH + 1)), '');
});
test('bio well over the limit is invalid', () => {
  assert.notEqual(validateBio('a'.repeat(BIO_MAX_LENGTH + 50)), '');
});

console.log('validateProfile / isProfileValid');
test('all-valid profile produces empty error map and passes isProfileValid', () => {
  const errors = validateProfile({
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    bio: 'Mathematician.',
  });
  assert.equal(errors.name, '');
  assert.equal(errors.email, '');
  assert.equal(errors.bio, '');
  assert.equal(isProfileValid(errors), true);
});
test('profile with one bad field fails isProfileValid', () => {
  const errors = validateProfile({
    name: 'Ada Lovelace',
    email: 'not-an-email',
    bio: '',
  });
  assert.equal(isProfileValid(errors), false);
});
test('profile with all bad fields returns all three messages', () => {
  const errors = validateProfile({
    name: '',
    email: '',
    bio: 'a'.repeat(BIO_MAX_LENGTH + 1),
  });
  assert.notEqual(errors.name, '');
  assert.notEqual(errors.email, '');
  assert.notEqual(errors.bio, '');
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) {
  process.exitCode = 1;
}