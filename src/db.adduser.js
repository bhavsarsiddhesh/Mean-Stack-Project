const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "siddhesh",
    database: "register",
};

let addUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "insert into userregister  (Firstname,Lastname,Roles,Country,Username,Password,Email) values (?,?,?,?,?,?,?)";
    await connection.queryAsync(sql, [
        input.Firstname,
        input.Lastname,
        input.Roles,
        input.Country,
        input.Username,
        input.Password,
        input.Email
    ]);
    await connection.endAsync();
}

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "select *from userregister where Username=? and Password=?";
    const results = await connection.queryAsync(sql, [
        input.Username,
        input.Password
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};



module.exports = { addUser, authenticateUser };