import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { updateAction } from 'lib/store/modules/foodReducer';

import styles from './addButton.module.scss';

const AddButton = () => {
  const options = useSelector((state) => state.optionReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const { storeName, foodName } = router.query;

  const onDispatch = () => {
    const foodCnt = sessionStorage.getItem('count') || 1;

    dispatch(
      updateAction({
        storeName,
        foodName,
        foodCost: 9800,
        foodCnt,
        options,
      }),
    );
  };

  return (
    <Link href={`/store/${storeName}`}>
      <div className={styles.container}>
        <div className={styles.btn} onClick={onDispatch}>
          추가하기
        </div>
      </div>
    </Link>
  );
};

export default AddButton;
