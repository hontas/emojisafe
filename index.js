const unsafeEmojiList = require('./unsafe-emoji-list');

function getEmojiCode(emoji) {
  return emoji.codePointAt(0).toString(16).toUpperCase();
}

module.exports = function isEmojiSafe(emoji) {
  return (emoji.length <= 2) && !unsafeEmojiList.includes(getEmojiCode(emoji));
};
