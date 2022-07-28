import styles from './background.module.scss';

const FoodBackground = ({ storeName }) => (
  <div
    className={styles.container}
    style={{
      background:
        'url(https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className={styles.cover}>
      <div className={styles.storename}>{storeName}</div>
      <div className={styles.desc}>
        phone
        <br />
        place
      </div>
    </div>
  </div>
);

export default FoodBackground;
