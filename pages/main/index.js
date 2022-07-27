import React, { useState } from 'react';
import styled from 'styled-components';

import StoreList from 'components/storeList';
import Modal from 'components/modal';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const MainPage = () => (
  <Container>
    <StoreList />
    <Modal />
  </Container>
);

export default MainPage;
