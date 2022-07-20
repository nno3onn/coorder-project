import styles from './complete.module.scss';

const CompleteOrder = () => (
  <div className={styles.container}>
    <img src="/icons/success_order.png" alt="order_success" />
    <div className={styles.logo}>CO : ORDER</div>
    <div className={styles.txt}>주문이 완료되었습니다.</div>
  </div>
);

export default CompleteOrder;
