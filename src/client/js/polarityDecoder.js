// Function to decode the score_tag of a text into a meaningful polarity term
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