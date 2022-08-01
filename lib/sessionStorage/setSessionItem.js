export default function setSessionItem(key, value) {
  const strItem = JSON.stringify(value);
  sessionStorage.setItem(key, strItem);
  return strItem;
}
