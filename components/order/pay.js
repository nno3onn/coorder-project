import styles from './pay.module.scss';

const Pay = ({ method, handleClick }) => (
  <div className={styles['pay-wrapper']}>
    <div className={styles.pay} onClick={handleClick('카카오페이')}>
      <img
        src={`/icons/checkbox_${method === '카카오페이' ? 'check' : 'default'}.png`}
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
    <div className={styles.pay} onClick={handleClick('네이버페이')}>
      <img
        src={`/icons/checkbox_${method === '네이버페이' ? 'check' : 'default'}.png`}
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
        src={`/icons/checkbox_${method === 'other' ? 'check' : 'default'}.png`}
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
