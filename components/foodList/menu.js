import React from 'react';
import Link from 'next/link';
import { v4 } from 'uuid';

import styles from './menu.module.scss';
import Food from './food';

const FoodMenu = ({ data }) => {
  console.log('foodmenu', data);
  const types = () => data.map((d) => Object.keys(d).join());

  return (
    <div className={styles.container}>
      <div className={styles['btn-wrapper']}>
        {data
          ? types().map((t, index) => (
              <Link href={`#id-${index}`} key={v4()}>
                <div className={`${styles['btn-type']} ${index === 0 && styles.selected}`}>{t}</div>
              </Link>
            ))
          : null}
      </div>
      {data
        ? data.map((d, index) =>
            Object.entries(d).map(([k, v]) => (
              <div key={v4()}>
                <div id={`id-${index}`} className={styles.title}>
                  {k}
                </div>
                <div className={styles['menu-wrapper']}>
                  {v.map((info) => (
                    <Food info={info} key={v4()} />
                  ))}
                </div>
              </div>
            )),
          )
        : null}
    </div>
  );
};

export default FoodMenu;
