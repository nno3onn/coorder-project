import { useEffect, useState } from 'react';

import styles from './countbox.module.scss';

// isOption = false => 수량
const CountBox = ({ name, cost, isCount = false }) => {
  const [cnt, setCnt] = useState(isCount ? 1 : 0);

  const getOptions = () => {
    const opt = sessionStorage.getItem('options');
    console.log(3, opt);
    return opt ? JSON.parse(opt) : {};
  };

  const onCount = (v) => () => {
    const options = getOptions();
    console.log('countbox', options);

    if (!(cnt === (isCount ? 1 : 0) && v === -1)) {
      const count = cnt + v;
      if (!isCount) {
        const newOptions = { ...options, [name]: { cost, cnt: count } };
        if (count === 0) {
          delete newOptions[name];
        }
        sessionStorage.setItem('options', JSON.stringify(newOptions));
        console.log(newOptions);
      } else {
        // sessionStorage.setItem('count', count);
      }
      setCnt(count);
    }
  };

  return (
    <div className={styles.countbox}>
      <div className={styles.minus} onClick={onCount(-1)}>
        -
      </div>
      <div className={styles.center}>{cnt}</div>
      <div className={styles.plus} onClick={onCount(+1)}>
        +
      </div>
    </div>
  );
};

export default CountBox;
