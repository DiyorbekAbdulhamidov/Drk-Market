const regFullName = document.querySelector('#fullname');
const regUserName = document.querySelector('#username');
const regPassword = document.querySelector('#password');
const regConfirmPassword = document.querySelector('#confirm-password');
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const fullname = regFullName.value;
  const username = regUserName.value;
  const password = regPassword.value;
  const confirmPassword = regConfirmPassword.value;

  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fullname, username, password, confirmPassword })
    });

    if (response.status === 200) {
      const message = await response.json();
      console.log(message);
      // Boshqa amallarni bajaring
    } else {
      throw new Error('Server bilan muammo yuz berdi');
    }
  } catch (error) {
    console.error(error);
  }
});
