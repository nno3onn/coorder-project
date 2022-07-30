import { updateAction } from 'lib/store/modules/foodReducer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './addButton.module.scss';

const AddButton = () => {
  const router = useRouter();
  const { storeName, foodName } = router.query;
  const dispatch = useDispatch();
  const allFood = useSelector((state) => state.foodReducer);

  const onDispatch = () => {
    const storeFood = allFood.filter((f) => f.storeName === storeName && f.foodName === foodName);
    const oldOptions = storeFood.length ? storeFood[0].options : {};

    const options = { ...JSON.parse(sessionStorage.getItem('options')) };
    const foodCnt = JSON.parse(sessionStorage.getItem('count'));

    dispatch(
      updateAction({
        storeName,
        foodName,
        foodCost: 9800,
        foodCnt: foodCnt || 1,
        options: { ...oldOptions, ...options } || {},
      }),
    );

    sessionStorage.removeItem('options');
  };

  const onClick = () => {
    router.push(`/store/${storeName}`);
    onDispatch();
  };

  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={onClick}>
        추가하기
      </div>
    </div>
  );
};

export default AddButton;
