const express = require('express');
const pg = require('pg');
const cors = require('cors');

const client = new pg.Client('postgres://ozmisxif:P_5210FQHpziYwWMaWK9MYXwSCtKfIe4@john.db.elephantsql.com:5432/ozmisxif');

client.connect();

const port = process.env.PORT || 5000;


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

    console.log(req.url);
  
    client.query("SELECT * FROM users", (err, data) => {
        if (err) {
            res.status(500).send("Error At Database");
        } else {
            console.log(data);
            res.status(200).send(data.rows);
        }
    })
  })
  

app.post('/adduser', (req, res) => {

  console.log(req.body);

    const username = req.body.username;
    const password = req.body.password;

    console.log(username);

    client.query(
        `INSERT INTO users (username, password) values ('${username}', '${password}');`,
        (err,data) => {
            if (err) {
                res.status(500).send("Error Occured User not added");
                console.log(err);
            }
            else {
                console.log(data);
                client.query("SELECT * FROM users", (err, data) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send("Error At Database");
                    } else {
                        console.log(data);
                        res.status(200).send(data.rows);
                    }
                })
            }
        });
})


app.listen(port, () => {
    console.log(`Running on ${port} port`);
})
