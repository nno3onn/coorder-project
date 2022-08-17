import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { updateAction } from 'lib/store/modules/foodReducer';

import styles from './addButton.module.scss';

const AddButton = () => {
  const options = useSelector((state) => state.optionReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const { STOR_CD, foodName } = router.query;

  const onClick = () => {
    const foodCnt = sessionStorage.getItem('count') || 1;

    dispatch(
      updateAction({
        storeCode: STOR_CD,
        foodName,
        foodCost: 9800,
        foodCnt,
        options,
      }),
    );
  };

  return (
    <Link href={`/store/${STOR_CD}`}>
      <div className={styles.container}>
        <div className={styles.btn} onClick={onClick}>
          추가하기
        </div>
      </div>
    </Link>
  );
};

export default AddButton;
