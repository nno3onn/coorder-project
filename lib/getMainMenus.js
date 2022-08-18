export default function getMainMenus(data) {
  return data.filter((v) => v.IS_MAIN === 'Y');
}
