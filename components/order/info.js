import { useSelector } from 'react-redux';

import styles from './info.module.scss';

const OrderInfo = () => {
  const { placeReducer, timeReducer } = useSelector((state) => state);

  return (
    <>
      <div className={styles.subtitle}>장소</div>
      {placeReducer}
      <div className={styles.border} />
      <div className={styles.subtitle}>시간</div>
      {timeReducer}:00
    </>
  );
};

export default OrderInfo;
