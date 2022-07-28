import styles from './pay.module.scss';

const Pay = ({ paymethod, handleClick }) => (
  <div className={styles['pay-wrapper']}>
    <div className={styles.pay} onClick={handleClick('kakao')}>
      <img
        src={`/icons/checkbox_${paymethod === 'kakao' ? 'check' : 'default'}.png`}
        alt="check"
        className={styles.checkbox}
      />
      <img src="/icons/pay_kakao.png" alt="kakaopay" />
      <p>
        카카오페이로
        <br />
        결제하기
      </p>
    </div>
    <div className={styles.pay} onClick={handleClick('naver')}>
      <img
        src={`/icons/checkbox_${paymethod === 'naver' ? 'check' : 'default'}.png`}
        alt="check"
        className={styles.checkbox}
      />
      <img src="/icons/pay_naver.png" alt="naver" />
      <p>
        네이버페이로
        <br />
        결제하기
      </p>
    </div>
    <div className={styles.pay} onClick={handleClick('other')}>
      <img
        src={`/icons/checkbox_${paymethod === 'other' ? 'check' : 'default'}.png`}
        alt="check"
        className={styles.checkbox}
      />
      <img src="/icons/pay_plus.png" alt="other" />
      <p>
        카드정보 직접
        <br />
        입력하기
      </p>
    </div>
  </div>
);

export default Pay;
