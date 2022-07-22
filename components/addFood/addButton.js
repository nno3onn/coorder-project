import { useRouter } from 'next/router';
import styles from './addButton.module.scss';

const AddButton = () => {
  const router = useRouter();
  const { storeName } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={() => router.push(`/store/${storeName}`)}>
        추가하기
      </div>
    </div>
  );
};

export default AddButton;
