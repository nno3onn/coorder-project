import styles from './background.module.scss';

const FoodBackground = ({ storeName }) => (
  <div className={styles.container}>
    <div className={styles.storename}>{storeName}</div>
    <div className={styles.desc}>
      phone
      <br />
      place
    </div>
  </div>
);

export default FoodBackground;
