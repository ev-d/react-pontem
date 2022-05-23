import { useEffect, useState } from 'react';

import Header from '../layout/Header';
import Content from '../layout/Content';
import Loader from '../common/ui/Loader';

import { fetchCardsList } from '../../api';

import styles from './App.module.css';

function App() {
  const [showLoader, setLoaderVisibility] = useState(false);
  const [cardsList, setCardsList] = useState([]);

  const getCardsList = async () => {
    setLoaderVisibility(true);
    try {
      const cardsList = await fetchCardsList();
      setCardsList(cardsList);
    } catch (err) {
      console.log('App::getCardsList::err', err);
    }
    setLoaderVisibility(false);
  }

  useEffect(() => {
    if (!cardsList.length) {
      getCardsList();
    }
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Content cardsList={cardsList} />
      <Loader showLoader={showLoader} />
    </div>
  );
}

export default App;
