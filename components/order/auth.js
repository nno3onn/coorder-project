import { useRef, useState } from 'react';

import phoneFormat from 'lib/format/phone';

import styles from './auth.module.scss';

const Auth = ({ setAuth }) => {
  const [isSend, setIsSend] = useState(false);
  const phoneRef = useRef();
  const verifyRef = useRef();

  const onGetAuth = () => {
    const phone = phoneRef.current.value;
    if (!phone) {
      return alert('휴대폰 번호를 입력해주세요.');
    }
    if (!phoneFormat(phone)) {
      return alert('올바른 휴대폰 번호를 입력해주세요.');
    }
    setIsSend(true);
  };

  const onCheck = () => {
    alert('인증이 확인되었습니다.');
    setAuth(true);
  };

  return (
    <>
      <div className={styles.subtitle}>휴대폰 번호</div>
      <div className={styles.subcontainer}>
        <input ref={phoneRef} placeholder="휴대폰 번호를 입력해주세요." />
        <button type="button" className={styles.grey} onClick={onGetAuth}>
          인증번호
        </button>
      </div>
      <div className={styles.subtitle}>인증번호</div>
      <div className={styles.subcontainer}>
        <input ref={verifyRef} placeholder="인증번호를 입력해주세요." />
        <button type="button" className={isSend ? '' : styles.grey} onClick={onCheck}>
          확인
        </button>
      </div>
    </>
  );
};

export default Auth;
