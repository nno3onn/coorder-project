import axios from 'axios';

export default async (req, res) => {
  try {
    const { userNum } = req;
    const url = `http://13.56.84.183:8080/sendSms?userNum=${userNum}`;
    const headers = {
      'Access-Control-Allow-Origin': '*',
    };
    const data = await axios.get(url, { headers });
    res.status(200).json({
      success: true,
      data: data.data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
};
