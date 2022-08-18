export default function sortByMenutype(data) {
  const sort = {};

  data.forEach((v) => {
    const { MENU_TYPE } = v;
    if (!sort[MENU_TYPE]) {
      sort[MENU_TYPE] = [];
    }
    sort[MENU_TYPE].push(v);
  });

  return sort;
}
