// This function converts a string to title case, also uses an array of words to keep original case

const toTitleCase = (str: string, keep: string[] = []) => {
  const words = str.split(" ");
  const titleWords = words.map((word) => {
    if (keep.includes(word)) {
      return word;
    }
    return `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`;
  });
  return titleWords.join(" ");
};
