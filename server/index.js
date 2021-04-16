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

function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}


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