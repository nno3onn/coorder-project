import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import getOption from 'lib/getApi/getOption';

import CountBox from './countbox';
import AddButton from './addButton';
import Option from './option';

import styles from './contents.module.scss';

const AddFoodContents = () => {
  const router = useRouter();
  const { foodName } = router.query;
  const [options, setOptions] = useState([]);

  const getOptions = async () => {
    const data = await getOption(foodName);
    return data;
  };
  useEffect(() => {
    const opt = getOptions();
    setOptions(opt);
  }, []);

  // const options = [
  //   {
  //     초밥: [
  //       { n: '여부초밥 2P', c: 0, isCount: false },
  //       { n: '참치초밥 2P', c: 300, isCount: false },
  //     ],
  //   },
  //   {
  //     토핑추가: [
  //       { n: '고기추가', c: 1000, isCount: true },
  //       { n: '상추추가', c: 500, isCount: true },
  //     ],
  //   },
  // ];

  return (
    <div className={styles.container}>
      <div className={styles['foodName-wrapper']}>{foodName}</div>
      {options.map((option) => (
        <div className={styles['option-wrapper']} key={v4()}>
          <Option option={option} />
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
