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

  return shuffleCards(cards);
  // return cards;
};

const shuffleCards = (cards) => {
  let currentIndex = cards.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [cards[currentIndex], cards[randomIndex]] = [
      cards[randomIndex],
      cards[currentIndex],
    ];
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

  const numberOfNonMatchedCards = cards.reduce((n, card) => {
    return n + (card.matched === false);
  }, 0);

  // if only 2 not matched cards left they are pair
  if (numberOfNonMatchedCards === 2) {
    cards.forEach((card) => {
      if (card.matched === false) {
        card.matched = true;
      }
    });
    return cards;
  }

  if (currentlyOpenCards === 2) {
    // find and see if match between two fliped cards
    const flipedPair = cards.filter((card) => card.fliped === true);
    if (flipedPair[0].cardImage === flipedPair[1].cardImage) {
      // this is a match!
      cards.forEach((card) => {
        if (
          card.cardId === flipedPair[0].cardId ||
          card.cardId === flipedPair[1].cardId
        ) {
          card.fliped = false;
          card.matched = true;
        }
      });
    } else {
      cards.forEach((card) => {
        if (!card.matched) {
          card.fliped = false;
        }
      });
    }
    // cards[cardId].fliped = true;
    cards.forEach((card) => {
      if (card.cardId === cardId) {
        card.fliped = true;
      }
    });
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
  }, 0);
};

export const getCurrentlyNotMatchedCards = (cards) => {
  return cards.reduce((n, card) => {
    return n + (card.currentlyMatchedCards === false);
  }, 0);
};
