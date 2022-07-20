import { useRouter } from 'next/router';

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
      <div className={styles.img} />
      <div className={styles['name-wrapper']}>{foodName}</div>
      {options.map((option) => (
        <div className={styles['option-wrapper']}>
          {Object.entries(option).map(([k, v]) => (
            <>
              <div className={styles.title}>{k}</div>
              <div className={styles.border} />
              {v.map((e) => (
                <div className={styles['info-wrapper']}>
                  <div className={styles.name}>{e.n}</div>
                  <div className={styles.cost}>+ {e.c.toLocaleString()}원</div>
                  {e.isCount ? (
                    <div className={styles.countbox}>
                      <div className={styles.left}>-</div>
                      <div className={styles.center}>1</div>
                      <div className={styles.right}>+</div>
                    </div>
                  ) : (
                    <div className={styles.radiobox} />
                  )}
                </div>
              ))}
            </>
          ))}
        </div>
      ))}
      <div className={styles['count-wrapper']}>
        <div className={styles.title}>수량</div>
        <div className={styles.countbox}>
          <div className={styles.left}>-</div>
          <div className={styles.center}>1</div>
          <div className={styles.right}>+</div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodContents;
