const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(' ulanildi uraa!');
    
  })
  .catch((error) => {
    console.error('ulanmadi ❌', error);
  });

// cd "C:\Program Files\MongoDB\Server\7.0\bin"