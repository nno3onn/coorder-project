import React from 'react';

import styles from './floatButton.module.scss';

export default function ModalButton({ setOpen }) {
  return (
    <div className={styles.container} type="button" onClick={() => setOpen(true)}>
      <div className={styles.txt}>장소 & 시간</div>
    </div>
  );
}
