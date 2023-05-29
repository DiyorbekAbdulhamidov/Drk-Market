document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form');
  const regFullName = document.querySelector('#fullname');
  const regEmail = document.querySelector('#email');
  const regPassword = document.querySelector('#password');
  const regConfirmPassword = document.querySelector('#confirm-password');

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
