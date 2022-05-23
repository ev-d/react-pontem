import Logo from '../../icons/Logo';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo/>
      <div className={styles.label}>
        PASTE YOUR FULLNAME
      </div>
    </header>
  );
}

export default Header;
