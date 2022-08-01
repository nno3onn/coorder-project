import { updateAction } from 'lib/store/modules/foodReducer';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import styles from './addButton.module.scss';

const AddButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { storeName, foodName } = router.query;

  const onDispatch = () => {
    const options = JSON.parse(sessionStorage.getItem('options'));
    console.log(options);
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
