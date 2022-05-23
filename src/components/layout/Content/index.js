import { useEffect, useState, startTransition } from 'react';

import CardsListVirtualizer from '../CardsListVirtualizer';
import Magnifier from '../../icons/Magnifier';

import router from '../../../helpers/router';
import { filterCardsSearch } from '../../../helpers/text';
import { CARD_SEARCH } from '../../../constants';

import styles from './Content.module.css';

const { searchParams } = new URL(router.getLocation());
const initialSearchText = searchParams.get(CARD_SEARCH);

const Content = ({ cardsList }) => {
  const [searchText, setSearchText] = useState(initialSearchText);
  const isCardsList = !!cardsList.length;

  const onSearchChange = ({ target }) => {
    startTransition(() => {
      setSearchText(target.value);
    });
  }

  const addSearchParams = () => {
    if (searchText) {
      const searchParams = new URLSearchParams();
      searchParams.set(CARD_SEARCH, searchText);

      router.addSearch(searchParams);
    }
  }

  useEffect(() => {
    addSearchParams();
  }, [searchText]);

  const filteredCardsList = filterCardsSearch(searchText, cardsList);

  return (
    <main className={styles.container}>
      <section>
        <div className={styles.searchWrapper}>
          <Magnifier className={styles.magnifier} />
          <input
            className={styles.searchInput}
            value={searchText}
            onChange={onSearchChange}
            type="search"
            placeholder="Search by operation or DeFi company name"
          />
        </div>
        <div className={styles.searchBtnWrapper}>
          <button
            className={styles.searchBtn}
            type="button"
          >
            all
          </button>
          <button
            className={styles.searchBtn}
            type="button"
          >
            selected
          </button>
        </div>
      </section>
      {isCardsList && <CardsListVirtualizer cardsList={filteredCardsList} />}
    </main>
  )
}

export default Content;
