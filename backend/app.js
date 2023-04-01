var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const connection = require('./conn')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//********************* Get all todos **************************/
app.get('/items', (req, res) => {

    connection.connect((err) => {
        if (err) {
            console.log('err:', err);
        }

        connection.query('SELECT * FROM items WHERE done = 0', (err, data) => {
            if (err) {
                console.log('err:', err);
            }
            console.log('data from query:', data);
            res.json(data);
        })
    })
})

//********************* Create new todo *************************/
app.post('/items', (req, res) => {
    let newTodo = req.body;

    connection.connect((err) => {
        if (err) {
            console.log('err:', err);
        }

        let sql = `INSERT INTO items (itemName, listId) VALUES ('${newTodo.newTodoName}', '${newTodo.newTodoList}')`;

        connection.query(sql, (err, data) => {
            if (err) {
                console.log('err:', err);
            }
            console.log('saved:', data);
            res.json(data);
        })
    })
})

//********************* Update todo as done *******************/
app.post('/done', (req, res) => {
    let itemDone = req.body.itemId;

    connection.connect((err) => {
        if (err) {
            console.log('err:', err);
        }

        let sql = `UPDATE items SET done = 1 WHERE itemId = ${itemDone}`;

        connection.query(sql, (err, data) => {
            if (err) {
                console.log('err:', err);
            }
            console.log('saved:', data);
            res.json(data);
        })
    })
})

module.exports = app;
