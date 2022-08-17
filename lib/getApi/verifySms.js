import axios from 'axios';

axios.defaults.withCredentials = true;

export default async function verifySms(phone, authNum) {
  try {
    const phoneNum = phone.substring(3);
    const url = `/api/check?userNum=${phoneNum}&authNum=${authNum}`;
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
