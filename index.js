const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());


app.post('/webhook/orders-create', (req, res) => {
    const orderData = req.body;
    console.log("Order data received:", orderData);
    res.status(200).send('Webhook received successfully');
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})