import axios from 'axios';

const loginForm = document.getElementById('form') as HTMLFormElement;
const logEmail = document.getElementById('email') as HTMLInputElement;
const logPassword = document.getElementById('password') as HTMLInputElement;

loginForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = logEmail.value;
  const password = logPassword.value;

  try {
    const response = await axios.post('/login', {
      email,
      password
    });
    console.log(response.data);
  } 
  catch (error) {
    console.log('Xatolik❌');
  }
});
