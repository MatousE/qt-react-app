const express = require('express');
const app  = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'q-t-db.c8idrehbuuoy.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: '200255136',
    database: 'qtdb'
});



app.get('/', (req,res)=>{
    const sqlView = "SELECT * FROM qt_User";
    const sqlInsert = "INSERT INTO qt_User (user_email,user_password) VALUES ('456@email.com','123123')"

    db.query(sqlView,(err,result,fields)=>{
        if(err)throw err;
        res.send(result);
    })
});

app.listen(3001,()=>{
   console.log('running on port 3001');
});