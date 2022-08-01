import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import CountBox from './countbox';
import AddButton from './addButton';
import Option from './option';

import styles from './contents.module.scss';

const AddFoodContents = () => {
  const router = useRouter();
  const { storeName, foodName } = router.query;

  const options = [
    {
      초밥: [
        { n: '여부초밥 2P', c: 0, isCount: false },
        { n: '참치초밥 2P', c: 300, isCount: false },
      ],
    },
    {
      토핑추가: [
        { n: '고기추가', c: 1000, isCount: true },
        { n: '상추추가', c: 500, isCount: true },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles['foodName-wrapper']}>{foodName}</div>

      {options.map((option) => (
        <div className={styles['option-wrapper']} key={v4()}>
          {Object.entries(option).map(([title, v]) => (
            <div key={v4()}>
              <div className={styles.title}>{title}</div>
              <div className={styles.border} />
              {v.map((info, index) => (
                <div className={styles['info-wrapper']} key={v4()}>
                  <Option info={info} index={index} />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
      <div className={styles['option-wrapper']}>
        <div className={styles['info-wrapper']}>
          <div className={styles.title}>수량</div>
          <CountBox isCount />
        </div>
      </div>
      <AddButton />
    </div>
  );
};

export default AddFoodContents;
