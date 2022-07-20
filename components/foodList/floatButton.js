import styles from './floatButton.module.scss';

const FloatButton = () => {
  const a = 1;

  return (
    <div className={styles.container}>
      <img src="/icons/shopping_basket.png" alt="basket" />
    </div>
  );
};

export default FloatButton;
