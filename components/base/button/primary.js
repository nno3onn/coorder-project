import styles from './primary.module.scss';

const PrimaryButton = ({ value, handleClick, selected }) => (
  <div className={`${styles.container} ${selected && styles.selected}`} onClick={handleClick}>
    {value}
  </div>
);

export default PrimaryButton;
