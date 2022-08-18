export default function sortBySideMenutype(data) {
  const sort = {};

  data.forEach((v) => {
    const { S_MENU_TYPE } = v;
    if (!sort[S_MENU_TYPE]) {
      sort[S_MENU_TYPE] = [];
    }
    sort[S_MENU_TYPE].push(v);
  });

  return sort;
}
