import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form') as HTMLFormElement;
  const regFullName = document.querySelector('#fullname') as HTMLInputElement;
  const regEmail = document.querySelector('#email') as HTMLInputElement;
  const regPassword = document.querySelector('#password') as HTMLInputElement;
  const regConfirmPassword = document.querySelector('#confirm-password') as HTMLInputElement;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const fullname = regFullName.value;
    const email = regEmail.value;
    const password = regPassword.value;
    const confirmPassword = regConfirmPassword.value;

    try {
      if (password !== confirmPassword) {
        alert('Parollar mos emas!❌');
      } 
      else {
        const response = await axios.post('/register', {
          fullname,
          email,
          password,
          confirmPassword
        });
        console.log(response.data);
        location.reload();
      }
    } catch (error) {
      alert('Ma`lumot serverga jo`natilmadi!❌');
    }
  });
});
