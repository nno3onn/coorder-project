import { useState } from 'react';
import { v4 } from 'uuid';

import CountBox from './countbox';
import RadioBox from './radiobox';

import styles from './option.module.scss';

const Option = ({ option }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {Object.entries(option).map(([title, v]) => (
        <div key={v4()}>
          <div className={styles.title}>{title}</div>
          <div className={styles.border} />
          {v.map((info, index) => (
            <div className={styles['info-wrapper']} key={v4()}>
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
                    isSelected={index === selectedIndex}
                    setter={setSelectedIndex}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Option;
