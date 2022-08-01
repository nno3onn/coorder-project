import { clearAction } from 'lib/store/modules/foodReducer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Auth from './auth';

import CompleteOrder from './complete';
import styles from './index.module.scss';
import OrderList from './orderList';
import Pay from './pay';

const Order = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState(false);
  const [paymethod, setPaymethod] = useState('kakao');

  const onInputChange = (e) => () => {
    const { value } = e.target;
    setMessage(value);
  };

  const onOrder = () => {
    if (auth) {
      dispatch(clearAction());
      setTimeout(() => router.push('/main'), 2000);
      return setComplete(true);
    }
    return alert('휴대폰 번호를 인증해주세요!');
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
            <input className={styles.msg} placeholder="요청사항을 입력해주세요." onChange={onInputChange} />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>문자인증</div>
            <div className={styles['contents-wrapper']}>
              <Auth setAuth={setAuth} />
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>결제수단</div>
            <div className={styles['contents-wrapper']}>
              <Pay paymethod={paymethod} handleClick={handleClick} />
            </div>
          </div>
          <div className={styles['btn-wrapper']} onClick={onOrder}>
            <div>주문하기</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Order;
