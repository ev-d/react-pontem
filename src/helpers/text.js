export const filterCardsSearch = (searchText, cardsList) => {
  const lowSearchTextList = searchText.split(' ').map(word => word.toLowerCase());

  if (lowSearchTextList.length > 1) {
    return cardsList.filter(card => {
      const lowTitle = card.title.toLowerCase();
      return lowSearchTextList.every(text => lowTitle.includes(text));
    });
  }

  return cardsList.filter(card => {
    const lowTitle = card.title.toLowerCase();
    return lowTitle.includes(lowSearchTextList[0]);
  });
}
