export default function getMainMenus(data) {
  const main = data.filter((v) => v.IS_MAIN === 'Y');
  console.log('main', main);
  return main;
}
