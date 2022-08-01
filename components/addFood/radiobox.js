import { useEffect, useState } from 'react';

import styled from 'styled-components';

const Click = styled.div`
  cursor: pointer;
  padding: 0 10px;
`;

const RadioBox = ({ name, cost, isSelected, setter, index }) => {
  const setInitial = () => {
    console.log(2);
    const opt = { [name]: { cost, cnt: 0 } };
    const initial = JSON.stringify(opt);
    sessionStorage.setItem('options', initial);
    console.log(initial);
    return initial;
  };

  useEffect(() => {
    console.log(1, index);
    if (index === 0) {
      setter(name);
      setInitial();
    }
  }, []);

  const getOptions = () => {
    const opt = sessionStorage.getItem('options');
    return opt ? JSON.parse(opt) : setInitial();
  };

  const onSelect = () => {
    setter(name);

    const opt = getOptions();
    const find = Object.entries(opt).filter(([k, v]) => v.cnt === 0);

    if (find) {
      const deleteItem = find[0][0];
      delete opt[deleteItem];
      opt[name] = { cost, cnt: 0 };
      sessionStorage.setItem('options', JSON.stringify(opt));

      const a = getOptions();
      console.log(a);
      setter(name);
    }

    // const newOptions = { ...options };

    // // 예전에 cnt=0인 요소를 제거하고, 자신을 넣음
    // let length = 0;
    // Object.keys(newOptions).forEach(() => (length += 1));
    // if (length) {
    //   Object.entries(options).forEach(([k, v]) => {
    //     if (v.cnt === 0) {
    //       delete newOptions[k];
    //     }
    //   });
    // }
    // newOptions[name] = { cost, cnt: 0 };
    // sessionStorage.setItem('options', JSON.stringify(newOptions));
  };

  return (
    <Click onClick={onSelect}>
      <img src={isSelected ? '/icons/checkbox_check.png' : '/icons/checkbox_default.png'} alt="checkbox" width="20" />
    </Click>
  );
};

export default RadioBox;
