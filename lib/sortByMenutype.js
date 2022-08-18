import getMainMenus from './getMainMenus';

export default function sortByMenutype(data) {
  const main = getMainMenus(data);
  const sort = { 메인메뉴: main };

  data.forEach((v) => {
    const { MENU_TYPE } = v;
    if (!sort[MENU_TYPE]) {
      sort[MENU_TYPE] = [];
    }
    sort[MENU_TYPE].push(v);
  });

  return sort;
}
