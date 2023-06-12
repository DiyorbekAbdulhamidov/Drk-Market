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
    console.log('Ulandi ura!');
    app.listen(3000, () => {
      console.log('Server ishlayapti');
    });
  })
  .catch((error) => {
    console.error('Xatolik serverda ❌:', error);
  });

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  confirmPassword: {
    type: String,
    required: true
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
  const { fullname, email, password, confirmPassword } = req.body;

  const user = new User({
    fullname,
    email,
    confirmPassword,
    password
  });

  user.save()
    .then(() => {
      res.status(200).send('Ro`yxatdan o`tidingiz, Tabriklamiz!');
    })
    .catch((error) => {
      res.status(400).send('Ro`yxatdan o`tishda xatolikz❌ ' + error.message);
    });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email, password })
    .then((user) => {
      if (user) {
        res.status(200).send('Kirish bajarildi!');
      } 
      else {
        res.status(400).send('Email yoki parol xato,yoki umuman bu user yo`q❌');
      }
    })
    .catch((error) => {
      res.status(400).send('Error: ' + error.message);
    });
});
// 