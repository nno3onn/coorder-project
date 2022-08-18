import getStore from './getApi/getStore';

export default async function getStoreInfo(STOR_CD) {
  const data = await getStore();
  const [find] = data.filter((v) => v.STOR_CD === STOR_CD);
  return find;
}
