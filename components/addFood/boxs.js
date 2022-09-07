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

const Boxs = ({ option, optionIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      {option.map((info, index) => (
        <InfoWrapper key={v4()}>
          <Text>{info.S_MENU_NM}</Text>
          <RightWrapper>
            <Text>+ {info.PRICE.toLocaleString()}원</Text>
            {info.IS_COUNT === 'Y' ? (
              <CountBox name={info.S_MENU_NM} cost={info.PRICE} optionIndex={optionIndex} />
            ) : (
              // <CountBox name={info.S_MENU_NM} cost={info.PRICE} maxCount={info.MAX_CNT} optionIndex={optionIndex} />
              <RadioBox
                name={info.S_MENU_NM}
                cost={info.PRICE}
                max={info.MAX}
                optionIndex={optionIndex}
                index={index}
                isSelected={index === selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          </RightWrapper>
        </InfoWrapper>
      ))}
    </>
  );
};
export default Boxs;
