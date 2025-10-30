/**
 * Tests for utils/stringUtils.js
 * - Table-driven tests and edge cases
 */
import {
  extractEmails,
  extractUrls,
  wordCount,
  capitalizeWords,
  reverseString
} from '../utils/stringUtils.js';

describe('stringUtils', () => {
  describe('extractEmails', () => {
    test.each([
      {
        name: 'single email',
        input: 'Contact me at test@example.com',
        expected: ['test@example.com']
      },
      {
        name: 'multiple emails',
        input: 'a@b.com and c@d.org',
        expected: ['a@b.com', 'c@d.org']
      }
    ])('$name', ({ input, expected }) => {
      // comments: ensures regex finds all emails or single email
      expect(extractEmails(input)).toEqual(expected);
    });

    test('returns empty array when no emails present', () => {
      expect(extractEmails('no emails here')).toEqual([]);
    });
  });

  describe('extractUrls', () => {
    test.each([
      { name: 'single url', input: 'https://example.com/page', expected: ['https://example.com/page'] },
      { name: 'multiple urls', input: 'Visit http://a.com and https://b.org', expected: ['http://a.com', 'https://b.org'] }
    ])('$name', ({ input, expected }) => {
      expect(extractUrls(input)).toEqual(expected);
    });

    test('returns empty array for empty text', () => {
      expect(extractUrls('')).toEqual([]);
    });
  });

  describe('wordCount', () => {
    test.each([
      { name: 'empty string', input: '', expected: 0 },
      { name: 'single word', input: 'hello', expected: 1 },
      { name: 'multiple words with extra spaces', input: '  hello   world  ', expected: 2 }
    ])('$name', ({ input, expected }) => {
      expect(wordCount(input)).toBe(expected);
    });

    test('handles null/undefined gracefully', () => {
      expect(wordCount(null)).toBe(0);
      expect(wordCount(undefined)).toBe(0);
    });
  });

  describe('capitalizeWords', () => {
    test('capitalizes every word boundary', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('a')).toBe('A');
    });

    test('leaves already capitalized letters intact', () => {
      expect(capitalizeWords('Hello world')).toBe('Hello World');
    });
  });

  describe('reverseString', () => {
    test.each([
      { name: 'normal string', input: 'abc', expected: 'cba' },
      { name: 'empty string', input: '', expected: '' }
    ])('$name', ({ input, expected }) => {
      expect(reverseString(input)).toBe(expected);
    });

    test('handles unicode and emoji correctly', () => {
      expect(reverseString('😊a')).toBe('a😊');
    });
  });
});
