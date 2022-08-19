import Link from 'next/link';
import React from 'react';

import styles from './kakaoButton.module.scss';

const KakaoButton = () => (
  <div
    className={styles.container}
    style={{ backgroundImage: 'url(/icons/kakaotalk.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
  />
);

export default KakaoButton;
