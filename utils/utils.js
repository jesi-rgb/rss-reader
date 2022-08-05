export function spliceSentences(text, nSentences = 3) {
  let sentences = text.split(".");

  if (sentences.length > nSentences) {
    sentences = sentences.splice(0, nSentences);
  }

  return sentences.join(" ");
}

export function titleToUrl(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w ]/g, "")
    .replace(/ /g, "-");
}
