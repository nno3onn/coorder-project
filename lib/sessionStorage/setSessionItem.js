export default function setSessionitem(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}
