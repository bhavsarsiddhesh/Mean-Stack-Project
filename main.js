const express = require("express");
const cors = require("cors");
//const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
//const upload = multer();

const dbadduser = require("./db.adduser");
const dbupdate = require("./db.update");

app.post("/adduser", async (req, res) => {
    try {
        const input = req.body;

        await dbadduser.addUser(input);
        res.json({ message: "success post" });
    } catch (err) {
        res.json({ message: "failure post" });
    }
});

app.post("/authuser", async (req, res) => {
    try {
        const input = req.body;

        await dbadduser.authenticateUser(input);
        res.json({ opr: true });
    } catch (err) {
        res.json({ opr: false });
    }
});

app.post("/updatepassword", async (req, res) => {

    try {
        const input = req.body;
        await dbupdate.updatepassword(input);
        res.json({ opr: "true" });
    } catch (err) {
        res.json({ out: "false" });
    }

});


/*app.post("/sample", upload.none(), async (req, res) => {
    res.json(req.body);
});*/

app.listen(2001);