const places = [
  '누리관 남자관 앞 1층 중앙출입구',
  '누리관 여자관 앞 1층 중앙출입구',
  '첨성관 1층 gs25 앞',
  '향토관 1층 중앙출입구',
];

const times = ['12:00', '01:00', '18:00', '19:00'];

const store = ['한반도', '맘스터치', '한솥', '이삭토스트'];
const menu = {
  한반도: [
    {
      대표메뉴: [
        { name: '이베리코한반(덮밥)', cost: 11900 },
        { name: '우삼겹한반(덮밥)', cost: 9900 },
      ],
    },
    {
      한반메뉴: [
        { name: '제육한반(덮밥)', cost: 8900 },
        { name: '이베리코 온국수', cost: 10900 },
        { name: '이베리코 비빔국수', cost: 10900 },
        { name: '마제한반', cost: 9900 },
      ],
    },
  ],
};

const dataConfigs = { places, times };

export default dataConfigs;
