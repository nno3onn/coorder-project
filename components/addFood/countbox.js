import { useEffect, useState } from 'react';

import styles from './countbox.module.scss';

// isOption = false => 수량
const CountBox = ({ name, cost, isOption = true }) => {
  const [cnt, setCnt] = useState(isOption ? 0 : 1);

  useEffect(() => {
    const s = JSON.parse(sessionStorage.getItem('options'));
    if (s && s[name]) {
      setCnt(s[name].cnt);
    }
  }, []);

  const onCount = (v) => () => {
    const count = cnt + (cnt === 0 && v === -1 ? 0 : v);
    setCnt(count);

    const s = JSON.parse(sessionStorage.getItem('options'));
    if (isOption) {
      const options = s ? { ...s, [name]: { cost, cnt: count } } : { [name]: { cost, cnt: count } };
      if (count === 0) {
        delete options[name];
      }
      sessionStorage.setItem('options', JSON.stringify(options));
    } else {
      const options = { ...s, foodCnt: count };
      sessionStorage.setItem('options', JSON.stringify(options));
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
