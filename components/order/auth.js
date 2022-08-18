import { useRef, useState } from 'react';

import phoneFormat from 'lib/format/phone';
import sendSms from 'lib/getApi/sendSms';
import verifySms from 'lib/getApi/verifySms';

import styles from './auth.module.scss';

const Auth = ({ setAuth, phoneRef }) => {
  const [isSend, setIsSend] = useState(false);
  const verifyRef = useRef();

  const onGetAuth = async () => {
    const phone = phoneRef.current.value;
    if (!phone) {
      return alert('휴대폰 번호를 입력해주세요.');
    }
    if (!phoneFormat(phone)) {
      return alert('올바른 휴대폰 번호를 입력해주세요.');
    }
    const res = await sendSms(phone);
    if (res) {
      setIsSend(true);
      return alert('인증번호가 발송되었습니다.');
    }
    return setIsSend(false);
  };

  const onCheck = async () => {
    const phone = phoneRef.current.value;
    const verify = verifyRef.current.value;

    if (isSend) {
      const res = await verifySms(phone, verify);
      if (res) {
        setAuth(true);
        return alert('인증이 확인되었습니다.');
      }
      return alert('다시 시도해주세요.');
    }
    return alert('인증번호를 받으세요.');
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
