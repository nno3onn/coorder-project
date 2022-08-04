import React from 'react';

import styles from './floatButton.module.scss';

const ModalButton = ({ setOpen }) => (
  <div className={styles.container} type="button" onClick={() => setOpen(true)}>
    <div className={styles.txt}>장소 & 시간</div>
  </div>
);

export default ModalButton;
