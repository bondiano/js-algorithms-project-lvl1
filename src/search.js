// @ts-check

/**
 * @param {{id: string; text: string;}[]} docs
 * @param {string} query
 */
export default (docs, query) => {
  const words = query.split(' ');
  const results = docs.filter((doc) => {
    const docWords = doc.text.split(' ');
    return words.every((word) => docWords.includes(word));
  });

  return results;
};
