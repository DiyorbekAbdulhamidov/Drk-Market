const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Ulanildi ura!');
    app.listen(3000, () => {
      console.log('Server ishlashga tayyor');
    });
  })
  .catch((error) => {
    console.error('Ulanmadi ❌  ', error);
  });

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.post('/register', (req, res) => {
  const { fullname, username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send("Parollar mos kelmadi");
  }

  const user = new User({
    fullname,
    username,
    password
  });

  user.save()
    .then(() => {
      res.status(200).send('Foydalanuvchi muvaffaqiyatli ro\'yxatdan o\'tdi');
    })
    .catch((error) => {
      res.status(400).send('Foydalanuvchi saqlanmadi: ' + error.message);
    });
});
