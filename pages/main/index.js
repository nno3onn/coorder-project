import React, { useState } from 'react';
import styled from 'styled-components';

import StoreList from 'components/storeList';
import Modal from 'components/modal';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const MainPage = () => {
  const [place, setPlace] = useState();
  const [time, setTime] = useState();

  return (
    <Container>
      <StoreList />
      <Modal place={place} setPlace={setPlace} time={time} setTime={setTime} />
    </Container>
  );
};

export default MainPage;
