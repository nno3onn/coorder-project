import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './menu.module.scss';

const FoodMenu = ({ data }) => {
  const router = useRouter();
  const { storeName } = router.query;

  const types = () => data.map((d) => Object.keys(d).join());

  return (
    <div className={styles.container}>
      <div className={styles['btn-wrapper']}>
        {data
          ? types().map((t, index) => (
              <Link href={`#id-${index}`}>
                <div className={`${styles['btn-type']} ${index === 0 && styles.selected}`}>{t}</div>
              </Link>
            ))
          : null}
      </div>
      {data
        ? data.map((d, index) =>
            Object.entries(d).map(([k, v]) => (
              <>
                <div id={`id-${index}`} className={styles.title}>
                  {k}
                </div>
                <div className={styles['menu-wrapper']}>
                  {v.map((info) => (
                    <>
                      <div
                        onClick={() => router.push(`/store/${storeName}/food/${info.name}`)}
                        className={styles['food-wrapper']}
                      >
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
