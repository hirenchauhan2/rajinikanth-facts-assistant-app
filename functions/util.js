 // Get the values of the keys of an object.
exports.values = (o) => Object.keys(o).map((k) => o[k]);

/**
 * Concatenates a list of messages into a single string.
 * @param {Array<string>} messages The messages to concat
 * @return {string} The concatenated messages.
 */
exports.concat =
  (...messages) => messages.map((message) => message.trim()).join(' ');

/**
 * Gets a random element from an array.
 * @param {Array<object>} a The array to retrieve an element from.
 * @return {object} The random element retrieved from the array.
 */
const random = (a) => a[Math.floor(Math.random() * a.length)];

exports.random = random;

/**
 * Pop a random element from an array.
 * @param {Array<object>} array The array to pop a random element from.
 * @return {object} The random element popped from the array.
 */
exports.randomPop = (array) => {
  if (!array.length) {
    return null;
  }
  const element = random(array);
  array.splice(array.indexOf(element), 1);
  return element;
};
