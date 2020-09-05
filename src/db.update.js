const Promise = require('bluebird');
const mysql = require('mysql');

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "siddhesh",
    database: "register",
};

let updatepassword = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "Select *from userregister where Email=?";
    const results = await connection.queryAsync(sql, [input.Email]);

    let sql1 = "Update userregister SET Password=? where Email=?";
    await connection.queryAsync(sql1, [input.Password, input.Email]);

    await connection.endAsync();

    if (results.lengths === 0) {
        throw new error("Invalid Credential");
    }
};

module.exports = { updatepassword }