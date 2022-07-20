import React, { useState } from 'react';

import styles from './menu.module.scss';

const FoodMenu = ({ data }) => {
  const [type, setType] = useState();

  return (
    <div className={styles.container}>
      <div className={styles['btn-wrapper']}>
        {data
          ? data.map((v) =>
              Object.keys(v).map((t) => (
                <div
                  className={`${styles['btn-type']} ${type === t ? styles.selected : ''}`}
                  onClick={() => setType(t)}
                >
                  {t}
                </div>
              )),
            )
          : null}
      </div>
      {data
        ? data.map((d) =>
            Object.entries(d).map(([k, v]) => (
              <>
                <div className={styles.title}>{k}</div>
                <div className={styles['menu-wrapper']}>
                  {v.map((info) => (
                    <>
                      <div className={styles['food-wrapper']}>
                        <div className={styles.img} />
                        <div className={styles.info}>
                          <div className={styles.name}>{info.name}</div>
                          <div className={styles.cost}>{info.cost.toLocaleString()}원</div>
                        </div>
                      </div>
                      <div className={styles.border} />
                    </>
                  ))}
                </div>
              </>
            )),
          )
        : null}
    </div>
  );
};

export default FoodMenu;
