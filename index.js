const unsafeEmojiList = require('./unsafe-emoji-list.js');

function getEmojiCode(emoji) {
  return emoji.codePointAt(0).toString(16);
}

module.exports = function canIUse(emoji) {
  return (emoji.length <= 2) && !unsafeEmojiList.contains(getEmojiCode(emoji));
};
