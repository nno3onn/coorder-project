import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { updateAction } from 'lib/store/modules/foodReducer';
import getFoodInfo from 'lib/getFoodInfo';

import styles from './addButton.module.scss';

const AddButton = () => {
  const options = useSelector((state) => state.optionReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const { STOR_CD, MENU_CD } = router.query;

  const onClick = async () => {
    const foodCnt = sessionStorage.getItem('count') || 1;

    const data = await getFoodInfo({ STOR_CD, MENU_CD });
    const { MENU_NM, PRICE } = data;

    dispatch(
      updateAction({
        storeCode: STOR_CD,
        foodCode: MENU_CD,
        foodName: MENU_NM,
        foodCost: PRICE,
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
