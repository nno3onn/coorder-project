import axios from 'axios';

axios.defaults.withCredentials = true;

export default async function getSideMenu({ STOR_CD, MENU_CD }) {
  try {
    const url = `/api/getSideMenu?STOR_CD=${STOR_CD}&MENU_CD=${MENU_CD}`;
    const options = {
      method: 'GET',
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
