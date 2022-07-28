const RadioBox = ({ selected }) => (
  <img src={selected ? '/icons/checkbox_check.png' : '/icons/checkbox_default.png'} alt="checkbox" width="20" />
);

export default RadioBox;
