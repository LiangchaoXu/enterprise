const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());


app.get('/', (req, res) => {
  res.send('Backend service is running!');
});


app.get('/api/news', async (req, res) => {
  try {
    const url = 'https://newsapi.org/v2/everything';
    const response = await axios.get(url, {
      params: {
        domains: 'wsj.com',
        apiKey: '66a8dc44ef8040cb867b8144af9a7afc', 
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news data:', error.message);
    res.status(500).json({ error: 'Failed to fetch news data' });
  }
});


app.get('/api/exchange-rates', async (req, res) => {
  try {
    const url = 'https://v6.exchangerate-api.com/v6/8d53e2b9703ffe6b4833c615/latest/USD'; 
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching exchange rates:', error.message);
    res.status(500).json({ error: 'Failed to fetch exchange rates' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});