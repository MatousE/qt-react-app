const express = require('express');
const app  = express();
const mysql = require('mysql');
const Docxtemplater = require('docxtemplater');
const PizZip = require('pizzip')
const path = require('path');
const fs = require('fs');
const walkPath = './Controls';



const db = mysql.createPool({
    host: 'q-t-db.c8idrehbuuoy.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: '200255136',
    database: 'qtdb'
});


function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

function errorHandler(error) {
    console.log(JSON.stringify({error: error}, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error) {
            return error.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
        // errorMessages is a humanly readable message looking like this :
        // 'The tag beginning with "foobar" is unopened'
    }
    throw error;
}

app.get('/', (req,res)=>{
    // const sqlView = "SELECT * FROM user";
    // const sqlInsert = "INSERT INTO user (email,password) VALUES ('mefda@email.com','12dasdf123')"
    // db.query(sqlInsert, (err,result)=>{
    //     res.send(result);
    // });
    //
    // db.query(sqlView,(err,result,fields)=>{
    //     res.send(result);
    fs.readdir(walkPath, (err, files) => {
        if (err){
            console.log('Could not list the dir', err)
        }
        files.forEach(function(file,index){
            console.log(file.toString())
            var content = fs
                .readFileSync(path.resolve(walkPath, file.toString()), 'binary');
            var zip = new PizZip(content);
            var doc;
            try {
                doc = new Docxtemplater(zip);
            } catch(error) {
                // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
                errorHandler(error);
            }

            doc.setData({
                first_name: 'John',
                last_name: 'Doe',
                phone: '0652455478',
                description: 'New Website'
            });

        });
    });
});

app.listen(3001,()=>{
   console.log('running on port 3001');
});