export default function phoneFormat(phone) {
  const reg = /^01([0|1|6|7|8|9])?([0-9]{8})$/;
  return reg.test(phone);
}
