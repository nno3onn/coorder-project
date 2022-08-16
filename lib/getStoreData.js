const { useSelector } = require('react-redux');

export default function getStoreData(STOR_CD) {
  const store = useSelector((state) => state.storeListReducer);
  const [storeData] = store.filter((v) => v.STOR_CD === STOR_CD);
  return storeData;
}
