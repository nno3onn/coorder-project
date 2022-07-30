import { useEffect } from 'react';

import styled from 'styled-components';

const Click = styled.div`
  cursor: pointer;
`;

const RadioBox = ({ name, cost, isSelected, setter, index }) => {
  useEffect(() => {
    const s = JSON.parse(sessionStorage.getItem('options'));
    if (s && s[name]) {
      setter(name);
    } else if (index === 0) {
      setter(name);
    }
  }, []);

  const onSelect = () => {
    const options = JSON.parse(sessionStorage.getItem('options')) || {};
    if (options) {
      Object.entries(options).forEach(([k, v]) => {
        if (v.cnt === 0) {
          delete options[k];
        }
      });
    }

    options[name] = { cost, cnt: 0 };
    sessionStorage.setItem('options', JSON.stringify(options));

    setter(name);
  };

  return (
    <Click onClick={onSelect}>
      <img src={isSelected ? '/icons/checkbox_check.png' : '/icons/checkbox_default.png'} alt="checkbox" width="20" />
    </Click>
  );
};

export default RadioBox;
