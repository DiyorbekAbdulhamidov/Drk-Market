const form = document.querySelector('#form');
const regFullName = document.querySelector('#fullname');
const regUserName = document.querySelector('#username');
const regPassword = document.querySelector('#password');
const regConfirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fullname = regFullName.value;
  const username = regUserName.value;
  const password = regPassword.value;
  const confirmPassword = regConfirmPassword.value;

  try {
    const response = await axios.post('/register', {
      fullname,
      username,
      password,
      confirmPassword
    });

    console.log(response.data);
  }
  catch (error) {
    alert('Malumotlar Jonatilmadi!❌');
    console.error('Malumotlar Jo`natilmadi!❌');
  }
});