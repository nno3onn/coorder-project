import { v4 } from 'uuid';

import Boxs from './boxs';

import styles from './option.module.scss';

const Option = ({ option }) => (
  <>
    {Object.entries(option).map(([title, v]) => (
      <div key={v4()}>
        <div className={styles.title}>{title}</div>
        <div className={styles.border} />
        <Boxs v={v} />
      </div>
    ))}
  </>
);

export default Option;
