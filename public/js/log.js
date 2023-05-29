const form = document.getElementById('form');
const logEmail = document.getElementById('email');
const logPassword = document.getElementById('password');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = logEmail.value;
  const password = logPassword.value;

  try {
    const response = await axios.post('/login', {
      email,
      password
    });
    console.log(response.data);
  } catch (error) {
    console.log('Xatolik❌');
  }
});
