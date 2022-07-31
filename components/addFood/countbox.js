import { useEffect, useState } from 'react';

import styles from './countbox.module.scss';

// isOption = false => 수량
const CountBox = ({ name, cost, isOption = true }) => {
  const [cnt, setCnt] = useState(isOption ? 0 : 1);
  const [options, setOptions] = useState({});

  useEffect(() => {
    const s = sessionStorage.getItem('options');
    if (s) {
      setOptions(JSON.parse(s));
      if (s[name]) {
        setCnt(s[name].cnt);
      }
    }
  }, []);

  const onCount = (v) => () => {
    if (!(cnt === (isOption ? 0 : 1) && v === -1)) {
      const count = cnt + v;

      if (isOption) {
        const newOptions = options ? { ...options, [name]: { cost, cnt: count } } : { [name]: { cost, cnt: count } };
        if (count === 0) {
          delete newOptions[name];
        }
        sessionStorage.setItem('options', JSON.stringify(newOptions));
      } else {
        sessionStorage.setItem('count', count);
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
