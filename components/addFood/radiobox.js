import { useEffect } from 'react';
import getSessionitem from 'lib/sessionStorage/getSessionitem';
import setSessionItem from 'lib/sessionStorage/setSessionitem';

import styled from 'styled-components';

const Click = styled.div`
  cursor: pointer;
  padding: 0 10px;
`;

const RadioBox = ({ name, cost, index, isSelected, setter }) => {
  const setInitial = () => {
    const opt = { [name]: { cost, cnt: 0 } };
    setSessionItem('options', opt);
  };

  useEffect(() => {
    if (isSelected) {
      setInitial();
    }
  }, []);

  const onSelect = () => {
    setter(index);

    const opt = getSessionitem('options');
    console.log(opt);
    // const find = Object.entries(opt).filter(([_k, v]) => v.cnt === 0);

    // if (find.length) {
    //   const deleteItem = find[0][0];
    //   delete opt[deleteItem];
    // }
    // opt[name] = { cost, cnt: 0 };
    // setSessionItem('options', opt);
  };

  return (
    <Click onClick={onSelect}>
      <img src={isSelected ? '/icons/checkbox_check.png' : '/icons/checkbox_default.png'} alt="checkbox" width="20" />
    </Click>
  );
};

export default RadioBox;
