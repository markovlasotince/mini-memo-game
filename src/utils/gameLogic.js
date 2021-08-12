export const generateCards = (numberOfPairs) => {
  const cards = [];
  let cardId = 0;

  for (let i = 1; i <= numberOfPairs; i++) {
    const firstPair = {
      cardId: cardId,
      cardImage: i,
      fliped: false,
      matched: false,
    };
    cardId++;
    const secondPair = {
      cardId: cardId,
      cardImage: i,
      fliped: false,
      matched: false,
    };

    cards.push(firstPair);
    cards.push(secondPair);
    cardId++;
  }

  return cards;
};

export const getCardById = (cards, cardId) => {
  return cards.find((card) => card.cardId === cardId);
};

export const flipCardFromDeck = (cards, cardId) => {
  // number of currently opened cards (if more than 2 opened and not matched, close them)
  const currentlyOpenCards = cards.reduce((n, card) => {
    return n + (card.fliped === true);
  }, 0);

  if (currentlyOpenCards === 2) {
    // find and see if match between two fliped cards
    const flipedPair = cards.filter((card) => card.fliped === true);
    if (flipedPair[0].cardImage === flipedPair[1].cardImage) {
      // this is a match!
      cards[flipedPair[0].cardId].matched = true;
      cards[flipedPair[0].cardId].fliped = false;

      cards[flipedPair[1].cardId].matched = true;
      cards[flipedPair[1].cardId].fliped = false;
    } else {
      cards.forEach((card) => {
        if (!card.matched) {
          card.fliped = false;
        }
      });
    }
    cards[cardId].fliped = true;
  } else {
    // if there is only one card opened, it's safe to flip one more
    cards.forEach((card) => {
      if (card.cardId === cardId) {
        card.fliped = true;
      }
    });
  }

  return cards;
};

export const getCurrentlyMatchedCards = (cards) => {
  return cards.reduce((n, card) => {
    return n + (card.currentlyMatchedCards === true);
  }, 0)
}