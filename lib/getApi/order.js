import axios from 'axios';

axios.defaults.withCredentials = true;

export default async function order({ storCd, reqCtnt, tel, dlvryTime, dlvrAddr, pymntPrice, pymntCtnt }) {
  try {
    const url = `/api/order?storCd=${storCd}&reqCtnt=${reqCtnt}&tel=${tel}&dlvryTime=${dlvryTime}&dlvrAddr=${dlvrAddr}&pymntPrice=${pymntPrice}&pymntCtnt=${pymntCtnt}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch(url, options);
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return err.message;
  }
}
