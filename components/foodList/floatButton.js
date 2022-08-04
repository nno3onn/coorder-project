import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './floatButton.module.scss';

const FloatButton = () => {
  const router = useRouter();
  const { storeName } = router.query;

  return (
    <Link href={`/store/${storeName}/order`}>
      <div className={styles.container}>
        <img src="/icons/shopping_basket.png" alt="basket" />
      </div>
    </Link>
  );
};

export default FloatButton;
