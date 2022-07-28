import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import Background from './background';
import RadioBox from './radiobox';

import styles from './contents.module.scss';
import CountBox from './countbox';
import AddButton from './addButton';

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
            <>
              <div className={styles.title}>{title}</div>
              <div className={styles.border} />
              {v.map((e) => (
                <div className={styles['info-wrapper']} key={v4()}>
                  <div className={styles.text}>{e.n}</div>
                  <div className={styles['right-wrapper']}>
                    <div className={styles.text}>+ {e.c.toLocaleString()}원</div>
                    {e.isCount ? <CountBox name={e.n} cost={e.c} /> : <RadioBox name={e.n} cost={e.c} selected />}
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      ))}
      <div className={styles['option-wrapper']}>
        <div className={styles['info-wrapper']}>
          <div className={styles.title}>수량</div>
          <CountBox isOption={false} />
        </div>
      </div>
      <AddButton />
    </div>
  );
};

export default AddFoodContents;
