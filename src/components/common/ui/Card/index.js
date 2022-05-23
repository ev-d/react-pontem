import styles from './Card.module.css';
import Button from '../Button';
import Cube from '../../../icons/Cube';
import TwoCubes from '../../../icons/TwoCubes';
import ThreeCubes from '../../../icons/ThreeCubes';
import PlentyCubes from '../../../icons/PlentyCubes';

const ImgRenderer = ({ count }) => {
  switch (count) {
    case 1: return <Cube />;
    case 2: return <TwoCubes />;
    case 3: return <ThreeCubes />;
    default : return <PlentyCubes />;
  }
}

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.blockWrapper}>
        <div className={styles.blockImg}>
          <ImgRenderer count={data.blocksCount} />
        </div>
        <span className={styles.blocksCount}>
          {data.blocksCount} BLOCKS
        </span>
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.title}>
          {data.title}
        </p>
        <p className={styles.description}>
          {data.description}
        </p>
      </div>
      <div className={styles.buttonsWrapper}>
        <Button
          className={styles.btn}
        >
          Details
        </Button>
        <Button
          className={styles.btn}
        >
          Mark as Suitable
        </Button>
      </div>
    </div>
  )
}

export default Card;
