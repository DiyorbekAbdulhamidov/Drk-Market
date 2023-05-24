window.addEventListener("load", async () => {
	const res = await fetch("http://localhost:8080/users");
	const users = (await res.json()).data;
	console.log(users);
	renderUsers(users);
});

function renderUsers(users: any[]) {
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