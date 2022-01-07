let express = require("express");
let app = express();
app.use(express.json());

let cors = require("cors");
app.use(cors());

let { showdata, addData } = require("./user");

app.get("/homeshow", async (req, res) => {
  let list = await showdata();
  res.json(list);
});

app.post("/homeadd", async (req, res) => {
  let user = req.body;
  await addData(user);
});

app.listen(4000, () => console.log("server started"));
