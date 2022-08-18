import getMenu from './getApi/getMenu';

export default async function getFoodInfo({ STOR_CD, MENU_CD }) {
  const data = await getMenu(STOR_CD);
  const [find] = data.filter((v) => v.MENU_CD === MENU_CD);
  return find;
}
