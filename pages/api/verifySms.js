import axios from 'axios';

export default async (req, res) => {
  try {
    const { userNum, authNum } = req.query;
    const url = `http://13.56.84.183:8080/check?userNum=${userNum}&authNum=${authNum}`;
    const headers = {
      'Access-Control-Allow-Origin': '*',
    };
    const data = await axios.post(url, { headers });
    res.status(200).json({
      success: true,
      data: data.data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: 'Bad Request' });
  }
};
