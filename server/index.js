const express = require('express');
const app  = express();
const mysql = require('mysql');
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const db = mysql.createPool({
    host: 'q-t-db.c8idrehbuuoy.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: '200255136',
    database: 'qtdb'
});




app.get('/', (req,res)=>{
    // const sqlView = "SELECT * FROM user";
    // const sqlInsert = "INSERT INTO user (email,password) VALUES ('mefda@email.com','12dasdf123')"
    // db.query(sqlInsert, (err,result)=>{
    //     res.send(result);
    // });
    //
    // db.query(sqlView,(err,result,fields)=>{
    //     res.send(result);

});

app.listen(3001,()=>{
   console.log('running on port 3001');
});