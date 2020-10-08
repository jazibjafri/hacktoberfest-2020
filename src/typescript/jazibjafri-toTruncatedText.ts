// This function truncates the given string at the given or default point

const toTruncatedText = (str: string, truncateOn = 150) => {
  return `${str.slice(0, truncateOn).trim()}...`;
};
