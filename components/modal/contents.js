import dataConfigs from 'configs/data';

import styles from './contents.module.scss';

export default function ModalContents({ setOpen, place, setPlace, time, setTime }) {
  const { place1, place2 } = dataConfigs;
  const arrTime = dataConfigs.time;

  const onPlace = (p) => setPlace(p);
  const onTime = (t) => setTime(t);

  return (
    <div className={styles.container}>
      <div className={styles.title}>음식을 수령 받을 장소를 선택해주세요</div>
      <div className={styles['contents-wrapper']}>
        {place1.map((p) => (
          <div className={`${styles['btn-1']} ${place === p ? styles.selected : ''}`} onClick={() => onPlace(p)}>
            {p}
          </div>
        ))}
      </div>
      <div className={styles['contents-wrapper']}>
        {place2.map((p) => (
          <div className={`${styles['btn-1']} ${place === p ? styles.selected : ''}`} onClick={() => onPlace(p)}>
            {p}
          </div>
        ))}
      </div>
      <div className={styles.border} />
      <div className={styles.title} style={{ marginBottom: 20 }}>
        음식을 수령 받을 시간을 선택해주세요
      </div>
      <div className={styles.desc}>
        선택하신 시간에 맞춰 음식이 배달됩니다.
        <br />
        선택지는 배달 받으실 시간 한 시간 전까지 유효합니다.
        <br />
        음식수령희망시간 한 시간 전부터는 주문 취소가 불가능합니다.
      </div>
      <div className={styles['contents-wrapper']}>
        {arrTime.map((t) => (
          <div className={`${styles['btn-2']} ${time === t ? styles.selected : ''}`} onClick={() => onTime(t)}>
            {t}
          </div>
        ))}
      </div>
      <div className={styles['btn-complete']} onClick={() => setOpen(false)}>
        선택 완료
      </div>
    </div>
  );
}
