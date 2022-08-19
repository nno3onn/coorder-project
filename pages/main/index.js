import React from 'react';
import styled from 'styled-components';

import StoreList from 'components/storeList';
import Modal from 'components/modal';
import KakaoButton from 'components/storeList/kakaoButton';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const MainPage = () => (
  <Container>
    <StoreList />
    <Modal />
    <KakaoButton />
  </Container>
);

export default MainPage;
