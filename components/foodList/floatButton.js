import styles from './floatButton.module.scss';

const FloatButton = () => {
  const a = 1;

  return (
    <a className={styles.container} href="/order">
      <img src="/icons/shopping_basket.png" alt="basket" />
    </a>
  );
};

export default FloatButton;
