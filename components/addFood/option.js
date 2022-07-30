import { useState } from 'react';

import CountBox from './countbox';
import RadioBox from './radiobox';

import styles from './option.module.scss';

const Option = ({ info, index }) => {
  const [selectedFood, setSelectedFood] = useState(0);

  return (
    <>
      <div className={styles.text}>{info.n}</div>
      <div className={styles['right-wrapper']}>
        <div className={styles.text}>+ {info.c.toLocaleString()}원</div>
        {info.isCount ? (
          <CountBox name={info.n} cost={info.c} />
        ) : (
          <RadioBox
            name={info.n}
            cost={info.c}
            index={index}
            selectedFood={selectedFood}
            isSelected={selectedFood === info.n}
            setter={setSelectedFood}
          />
        )}
      </div>
    </>
  );
};

export default Option;
