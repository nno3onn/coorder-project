import order from 'lib/getApi/order';
import { clearAction } from 'lib/store/modules/foodReducer';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './auth';

import CompleteOrder from './complete';
import styles from './index.module.scss';
import OrderList from './orderList';
import Pay from './pay';

const Order = () => {
  const router = useRouter();
  const { STOR_CD } = router.query;
  const dispatch = useDispatch();
  const states = useSelector((state) => state);
  const data = states.foodReducer;
  const time = states.timeReducer;
  const place = states.placeReducer;

  const [totalCost, setTotalCost] = useState(0);
  const [complete, setComplete] = useState(false);
  const [message, setMessage] = useState('');
  const [auth, setAuth] = useState(false);
  const [paymethod, setPaymethod] = useState('kakao');
  const phoneRef = useRef();

  const onInputChange = (e) => () => {
    const { value } = e.target;
    setMessage(value);
  };

  const onOrder = async () => {
    // if (auth) {
    console.log('data', data);
    const orderData = data.reduce((a, b) => {
      //*! 문제 메시지 보내는 음식 내용 작성 중!!!
      const opt = Object.entries(b.options).reduce((i, [k, v]) => `${i} ${k} ${v.cnt}개, `);
      // const opt = b.options.reduce((i, j) => {
      //   const [nm] = Object.keys(j);
      //   return `${i} ${nm} ${j.cnt}개, `;
      // });
      // const d = `${foodName}`;
      // a += d;
      console.log('opt', opt);
    });

    // const res = await order({
    //   storCd: STOR_CD,
    //   reqCtnt: message,
    //   tel: phoneRef.current.value,
    //   dlvryTime: time,
    //   dlvryPlace: place,
    //   pymntPrice: totalCost,
    //   // pymntCtnt,
    // });

    // if (res) {
    //   dispatch(clearAction());
    //   setTimeout(() => router.push('/main'), 2000);
    //   return setComplete(true);
    // }
    // return alert('다시 시도해주세요.');
    // }
    // return alert('휴대폰 번호를 인증해주세요!');
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
              <OrderList setTotalCost={setTotalCost} />
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>메시지 및 요청사항</div>
            <input className={styles.msg} placeholder="요청사항을 입력해주세요." onChange={onInputChange} />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.title}>문자인증</div>
            <div className={styles['contents-wrapper']}>
              <Auth setAuth={setAuth} phoneRef={phoneRef} />
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
