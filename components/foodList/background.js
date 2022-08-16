import getStoreData from 'lib/getStoreData';
import { useEffect } from 'react';
import styled from 'styled-components';
import styles from './background.module.scss';

const Container = styled.div`
  position: relative;
  color: $color-white;
  width: 100%;
  height: 40vh;  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
`;

const FoodBackground = ({ STOR_CD }) => {
  const data = getStoreData(STOR_CD);

  return (
    <Container
      STOR_CD={STOR_CD}
      style={{
        background: `url(/images/represent/${STOR_CD}.jpg)`,
      }}
    >
      <div className={styles.cover}>
        <div className={styles.storeCode}>{data && data.STOR_NM}</div>
        <div className={styles.desc}>
          {data && data.TEL}
          <br />
          {data && data.ADDR}
        </div>
      </div>
    </Container>
  );
};

export default FoodBackground;
