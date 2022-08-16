import React from 'react';
import Link from 'next/link';
import { v4 } from 'uuid';

import sortByMenutype from 'lib/sortByMenuType';

import Food from './food';

import styles from './menu.module.scss';

const FoodMenu = ({ data }) => {
  const sortedObj = sortByMenutype(data);
  const types = Object.keys(sortedObj);

  return (
    <div className={styles.container}>
      <div className={styles['btn-wrapper']}>
        {data
          ? types.map((t, index) => (
              <Link href={`#id-${index}`} key={v4()}>
                <div className={`${styles['btn-type']} ${index === 0 && styles.selected}`}>{t}</div>
              </Link>
            ))
          : null}
      </div>
      {sortedObj
        ? Object.entries(sortedObj).map(([k, v], index) => (
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
          ))
        : null}
    </div>
  );
};

export default FoodMenu;
