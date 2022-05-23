import styles from './Loader.module.css';

const Loader = ({ showLoader = false}) => {
  if (!showLoader) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.loader} />
    </div>
  )
}

export default Loader;
