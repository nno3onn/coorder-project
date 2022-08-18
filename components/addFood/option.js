import { v4 } from 'uuid';

import Boxs from './boxs';

import styles from './option.module.scss';

const Option = ({ type, option, optionIndex }) => (
  <>
    <div className={styles.title}>{type}</div>
    <div className={styles.border} />
    <Boxs option={option} optionIndex={optionIndex} />
  </>
);

export default Option;
