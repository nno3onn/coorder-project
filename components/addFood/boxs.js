import { useState } from 'react';
import { v4 } from 'uuid';
import styled from 'styled-components';

import CountBox from './countbox';
import RadioBox from './radiobox';

const InfoWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Text = styled.div`
  font-weight: bold;
  color: #111;
  font-size: 16px;
`;

const Boxs = ({ v }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {v.map((info, index) => (
        <InfoWrapper key={v4()}>
          <Text>{info.n}</Text>
          <RightWrapper>
            <Text>+ {info.c.toLocaleString()}원</Text>
            {info.isCount ? (
              <CountBox name={info.n} cost={info.c} />
            ) : (
              <RadioBox
                name={info.n}
                cost={info.c}
                index={index}
                isSelected={index === selectedIndex}
                setter={setSelectedIndex}
              />
            )}
          </RightWrapper>
        </InfoWrapper>
      ))}
    </>
  );
};
export default Boxs;
