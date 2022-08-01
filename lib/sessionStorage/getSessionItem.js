export default function getSessionitem(key) {
  const opt = sessionStorage.getItem(key);
  return opt ? JSON.parse(opt) : {};
}
