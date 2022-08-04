import { updateAction } from 'lib/store/modules/foodReducer';
import { clearAction } from 'lib/store/modules/optionReducer';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import styles from './addButton.module.scss';

const AddButton = () => {
  const options = useSelector((state) => state.optionReducer);
  console.log('options', options);
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

    dispatch(clearAction());
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
