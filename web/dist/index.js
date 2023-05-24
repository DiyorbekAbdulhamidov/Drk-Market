"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener("load", () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("http://localhost:8080/users");
    const users = (yield res.json()).data;
    console.log(users);
    renderUsers(users);
}));
function renderUsers(users) {
    const ul = document.createElement("ul");
    for (let { email, id, name, username } of users) {
        const li = document.createElement("li");
        li.innerHTML = `
       <span>${username}</span>
       <span>${name}</span>
       <a href="/public/user.html?id=${id}" >${email}</a>
  `;
        ul.appendChild(li);
    }
    document.body.replaceChild(ul, document.body.children[0]);
}
