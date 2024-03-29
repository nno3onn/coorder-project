import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import PrimaryButton from 'components/base/button/primary';
import dataConfigs from 'configs/data';

import { updatPlaceAction } from 'lib/store/modules/placeReducer';
import { updateTimeAction } from 'lib/store/modules/timeReducer';
import styles from './contents.module.scss';

const ModalContents = ({ setOpen }) => {
  const dispatch = useDispatch();
  const { places, times } = dataConfigs;
  const { placeReducer, timeReducer } = useSelector((state) => state);
  const nowHour = new Date().getHours();

  const onPlace = (p) => () => dispatch(updatPlaceAction(p));
  const onTime = (t) => () => {
    if (t > nowHour + 1) {
      dispatch(updateTimeAction(t));
    }
  };

  const onComplete = () => setOpen(false);

  useEffect(() => {
    let setHour;
    if (nowHour < 11) {
      setHour = 12;
    } else if (nowHour < 12) {
      setHour = 13;
    } else if (nowHour < 17) {
      setHour = 18;
    } else {
      setHour = 19;
    }
    dispatch(updateTimeAction(setHour));
  }, []);

  const isDisabledTime = (t) => t <= nowHour + 1;

  return (
    <div className={styles.container}>
      <div className={styles.title}>음식을 수령 받을 장소를 선택해주세요</div>
      <div className={styles['contents-wrapper']}>
        {places.map((p) => (
          <div className={styles['btn-1']} key={v4()}>
            <PrimaryButton value={p} handleClick={onPlace(p)} selected={placeReducer === p} />
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
        {times.map((t) => (
          <div className={styles['btn-2']} key={v4()}>
            <PrimaryButton
              value={`${t}:00`}
              handleClick={onTime(t)}
              selected={timeReducer === t}
              isDisabled={isDisabledTime(t)}
            />
          </div>
        ))}
      </div>

      <div className={styles['btn-complete']}>
        <PrimaryButton value="선택 완료" handleClick={onComplete} selected />
      </div>
    </div>
  );
};

export default ModalContents;
