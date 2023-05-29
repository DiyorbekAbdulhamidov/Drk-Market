var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// import axios from 'axios';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#form');
    const regFullName = document.querySelector('#fullname');
    const regEmail = document.querySelector('#email');
    const regPassword = document.querySelector('#password');
    const regConfirmPassword = document.querySelector('#confirm-password');
    form.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
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
                const response = yield axios.post('/register', {
                    fullname,
                    email,
                    password,
                    confirmPassword
                });
                console.log(response.data);
                location.reload();
            }
        }
        catch (error) {
            alert('Ma`lumot serverga jo`natilmadi!❌');
        }
    }));
});
