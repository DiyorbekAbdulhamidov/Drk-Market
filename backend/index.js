const express = require("express");
const cors = require("cors");
const { users } = require("./data");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
	res.send({ data: users, message: "success get users" });
});

app.get("/users/:userID", (req, res) => {
	const { userID } = req.params;
	const user = users.find((u) => u.id === +userID);

	if (!user) return res.status(404).send({ message: "user not found" });

	res.send({ data: user, message: "success get single user" });
});

app.delete("/users/:userID", (req, res) => {
	const { userID } = req.params;

	const deleteIdx = users.findIndex((u) => u.id === +userID);
	if (deleteIdx === -1) return res.status(404).send({ message: "user not found" });

	const deletedUser = users[deleteIdx];
	users.splice(deleteIdx, 1);

	res.send({ data: deletedUser, message: "user successfuly deleted" });
});

app.post("/users", (req, res) => {
	const user = { ...req.body, id: Math.random() };
	users.push(user);
	res.send({ data: user, message: "success created user" });
});

app.put("/users/:userID", (req, res) => {});

const PORT = 8080;

app.listen(PORT, () => console.log(`🌀 Listening on port ${PORT}... 🌀`));
