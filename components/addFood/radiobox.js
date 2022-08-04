import { updateAction, clearAction } from 'lib/store/modules/optionReducer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

const Click = styled.div`
  cursor: pointer;
  padding: 0 10px;
`;

const RadioBox = ({ name, cost, index, isSelected, setSelectedIndex }) => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.optionReducer);

  useEffect(() => {
    if (index === 0) {
      dispatch(updateAction({ name, cost, cnt: 0 }));
    }
  }, []);

  const onSelect = () => {
    setSelectedIndex(index);

    const opt = { ...options };
    const find = Object.entries(opt).filter(([_k, v]) => v.cnt === 0);

    if (find.length) {
      const deleteItem = find[0][0];
      delete opt[deleteItem];
    }
    opt[name] = { cost, cnt: 0 };
    dispatch(updateAction({ name, cost, cnt: 0 }));
  };

  return (
    <Click onClick={onSelect}>
      <img src={isSelected ? '/icons/checkbox_check.png' : '/icons/checkbox_default.png'} alt="checkbox" width="20" />
    </Click>
  );
};

export default RadioBox;
