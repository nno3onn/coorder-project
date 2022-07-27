import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { testAction } from 'lib/store/modules/foodReducer';

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

  const dispatch = useDispatch();

  const onDispatch = () => dispatch(testAction('테스트 액션입니다.'));

  return (
    <Container>
      <StoreList />
      <Modal place={place} setPlace={setPlace} time={time} setTime={setTime} />
      <button type="button" onClick={onDispatch}>
        버튼
      </button>
    </Container>
  );
};

export default MainPage;
