import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import getSideMenu from 'lib/getApi/getSideMenu';
import getFoodInfo from 'lib/getFoodInfo';
import sortBySideMenutype from 'lib/sortBySideMenutype';

import CountBox from './countbox';
import AddButton from './addButton';
import Option from './option';

import styles from './contents.module.scss';

const AddFoodContents = () => {
  const router = useRouter();
  const { STOR_CD, MENU_CD } = router.query;
  const [options, setOptions] = useState();
  const [foodInfo, setFoodInfo] = useState();

  const getFood = async () => {
    const info = await getFoodInfo({ STOR_CD, MENU_CD });
    setFoodInfo(info);
  };

  const getOptions = async () => {
    const data = await getSideMenu({ STOR_CD, MENU_CD });
    const sorted = sortBySideMenutype(data);
    setOptions(sorted);
  };

  useEffect(() => {
    getFood();
    getOptions();
  }, [STOR_CD]);

  return (
    <div className={styles.container}>
      {foodInfo && (
        <div className={styles['foodName-wrapper']}>
          <div className={styles.name}>{foodInfo.MENU_NM}</div>
          <div className={styles.cost}>{foodInfo.PRICE.toLocaleString()}원</div>
        </div>
      )}
      {options &&
        Object.entries(options).map(([k, v], i) => (
          <div className={styles['option-wrapper']} key={v4()}>
            <Option type={k} option={v} optionIndex={i} />
          </div>
        ))}
      <div className={styles['option-wrapper']}>
        <div className={styles['info-wrapper']}>
          <div className={styles.title}>수량</div>
          <CountBox isCount />
        </div>
      </div>
      <AddButton />
    </div>
  );
};

export default AddFoodContents;
