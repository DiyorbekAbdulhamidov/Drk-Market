window.addEventListener("load", async () => {
	const userID = location.search.split("=")[1];
	const divElement = document.createElement("div");
	let message = "";
	try {
		const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
		if (res.status === 404) throw new Error("User not found");
		const user = await res.json();
		message = `<h1>${user.name}</h1>`;
	} catch (err: any) {
		message = err.message;
	}

	divElement.innerHTML = message;
	document.body.replaceChild(divElement, document.body.children[0]);
});
