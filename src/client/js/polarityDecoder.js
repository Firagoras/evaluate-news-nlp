// Function to decode the score_tag returned form the api into a meaningful polarity term
function decodePolarity (scoreTag) {
  switch (scoreTag) {
    case 'P+':
      return 'strong positive';
    case 'P':
      return 'positive';
    case 'NEU':
      return 'neutral';
    case 'N':
      return 'negative';
    case 'N+':
      return 'strong negative';
    case 'NONE':
      return 'no sentiment';
  }
}

export {decodePolarity};