import styles from './primary.module.scss';

const PrimaryButton = ({ value, handleClick, selected, isDisabled = false }) => (
  <div
    className={`${styles.container} ${isDisabled ? styles.disabled : selected && styles.selected}`}
    onClick={handleClick}
  >
    {value}
  </div>
);

export default PrimaryButton;
