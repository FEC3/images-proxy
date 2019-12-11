const express = require('express');



let app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.static('./'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});