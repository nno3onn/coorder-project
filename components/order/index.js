import { useRouter } from 'next/router';
import { useState } from 'react';

import CompleteOrder from './complete';
import styles from './index.module.scss';
import OrderList from './orderList';
import Pay from './pay';

const Order = () => {
  const router = useRouter();

  const [complete, setComplete] = useState(false);
  const [paymethod, setPaymethod] = useState('kakao');

  const onClick = () => {
    setComplete(true);
    setTimeout(() => router.push('/main'), 2000);
  };

  const handleClick = (method) => () => setPaymethod(method);

  return (
    <>
      {complete ? (
        <CompleteOrder />
      ) : (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>주문내역</div>
            <div className={styles['contents-wrapper']}>
              <OrderList />
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>메시지 및 요청사항</div>
            <input className={styles.msg} placeholder="요청사항을 입력해주세요." />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>문자인증</div>
            <div className={styles['contents-wrapper']}>
              <div className={styles.subtitle}>휴대폰 번호</div>
              <div className={styles.subcontainer}>
                <input placeholder="휴대폰 번호를 입력해주세요." />
                <button type="button" className={styles.grey}>
                  인증번호
                </button>
              </div>
              <div className={styles.subtitle}>인증번호</div>
              <div className={styles.subcontainer}>
                <input placeholder="인증번호를 입력해주세요." />
                <button type="button">확인</button>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>결제수단</div>
            <div className={styles['contents-wrapper']}>
              <Pay paymethod={paymethod} handleClick={handleClick} />
            </div>
          </div>
          <div className={styles['btn-wrapper']} onClick={onClick}>
            <div>주문하기</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
