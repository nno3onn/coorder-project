import axios from 'axios';

axios.defaults.withCredentials = true;

export default async function sendSms(phone) {
  try {
    const phoneNum = phone.substring(3);
    const url = `/api/sendSms?userNum=${phoneNum}`;
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
