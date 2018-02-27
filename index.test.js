const isEmojiSafe = require('./index');

describe('isEmojiSafe', () => {
  it('should return true for valid emojis', () => {
    expect(isEmojiSafe("😄")).toBe(true);
  });

  it('should return false for compound emojis', () => {
    expect(isEmojiSafe("👨‍👩‍👧‍👧")).toBe(false);
  });

  it('should return false for not supported emojis', () => {
    [
      "🤢",
      "🤠",
      "🕶",
      "🌭",
      "🤣"
    ].forEach((emoji) => {
      expect(isEmojiSafe(emoji)).toBe(false);
    });
  });
});
