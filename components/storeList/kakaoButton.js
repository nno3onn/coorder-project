import Link from 'next/link';
import React from 'react';

import styles from './kakaoButton.module.scss';

const KakaoButton = () => (
  <Link href="https://open.kakao.com/o/sLjSfLwe">
    <div
      className={styles.container}
      style={{ backgroundImage: 'url(/icons/kakaotalk.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
  </Link>
);

export default KakaoButton;
