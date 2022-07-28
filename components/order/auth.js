import styles from './auth.module.scss';

const Auth = ({ setAuth }) => {
  const onGetAuth = () => {
    'hi';
  };

  const onCheck = () => {
    alert('인증이 확인되었습니다.');
    setAuth(true);
  };

  return (
    <>
      <div className={styles.subtitle}>휴대폰 번호</div>
      <div className={styles.subcontainer}>
        <input placeholder="휴대폰 번호를 입력해주세요." />
        <button type="button" className={styles.grey} onClick={onGetAuth}>
          인증번호
        </button>
      </div>
      <div className={styles.subtitle}>인증번호</div>
      <div className={styles.subcontainer}>
        <input placeholder="인증번호를 입력해주세요." />
        <button type="button" onClick={onCheck}>
          확인
        </button>
      </div>
    </>
  );
};

export default Auth;
