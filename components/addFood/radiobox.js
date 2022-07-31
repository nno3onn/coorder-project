import { useEffect, useState } from 'react';

import styled from 'styled-components';

const Click = styled.div`
  cursor: pointer;
  padding: 0 10px;
`;

const RadioBox = ({ name, cost, isSelected, setter, index }) => {
  const [options, setOptions] = useState({});

  useEffect(() => {
    const s = sessionStorage.getItem('options');
    if (s) {
      const storage = JSON.parse(s);
      // options에 해당 메뉴가 있으면 setter 변경
      if (s[name]) {
        setter(name);
        setOptions(storage);
      }

      // 이전에 저장한 메뉴가 있지만 radio가 없으면 첫 번째 요소로 함
      const find = Object.values(storage).find((v) => v.cnt === 0);
      if (!find && index === 0) {
        setter(name);
        const newOptions = { ...storage, [name]: { cost, cnt: 0 } };
        sessionStorage.setItem('options', JSON.stringify(newOptions));
        setOptions(newOptions);
      }
      // options가 없으면 첫 번째 요소를 넣음
    } else if (index === 0) {
      setter(name);
      const newOptions = { [name]: { cost, cnt: 0 } };
      sessionStorage.setItem('options', JSON.stringify(newOptions));
      setOptions(newOptions);
    }
  }, []);

  const onSelect = () => {
    setter(name);

    const newOptions = { ...options };

    // 예전에 cnt=0인 요소를 제거하고, 자신을 넣음
    let length = 0;
    Object.keys(newOptions).forEach(() => (length += 1));
    if (length) {
      Object.entries(options).forEach(([k, v]) => {
        if (v.cnt === 0) {
          delete newOptions[k];
        }
      });
    }
    newOptions[name] = { cost, cnt: 0 };
    sessionStorage.setItem('options', JSON.stringify(newOptions));
  };

  return (
    <Click onClick={onSelect}>
      <img src={isSelected ? '/icons/checkbox_check.png' : '/icons/checkbox_default.png'} alt="checkbox" width="20" />
    </Click>
  );
};

export default RadioBox;
