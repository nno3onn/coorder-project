import { useRouter } from 'next/router';
import styles from './floatButton.module.scss';

const FloatButton = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <div className={styles.container} onClick={() => router.push(`/store/${query.storeName}/order`)}>
      <img src="/icons/shopping_basket.png" alt="basket" />
    </div>
  );
};

export default FloatButton;
