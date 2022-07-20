import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Loading from 'components/loading';
import StoreList from 'components/storeList';
import Modal from 'components/modal';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  const [place, setPlace] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  });

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <StoreList />
      <Modal place={place} setPlace={setPlace} time={time} setTime={setTime} />
    </Container>
  );
};

export default MainPage;
