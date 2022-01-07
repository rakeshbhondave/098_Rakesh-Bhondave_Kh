let mysql = require("mysql");
let Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

let dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "jsdata",
};

async function addData(user) {
  let connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `insert into person values(?,?)`;
  await connection.queryAsync(sql, [user.id, user.box]);

  await connection.endAsync();
  console.log("record added");
}

async function showdata() {
  let connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from box`;
  let list = await connection.queryAsync(sql, []);

  console.log("record display");
  await connection.endAsync();
  return list;
}

module.exports = { addData, showdata };
