const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const mysql=require('mysql')
const bearerToken=require('express-bearer-token')
const event=require('./events')

const connection=mysql.createConnection(
    {
        host:'database-1.calhipz7vvzl.us-east-2.rds.amazonaws.com',
        port:3306,
        user:'admin',
        password:'venky123',
        database:'chatbot'
    }
)

connection.connect();
const port=3000


const app=express()
          .use(cors())
          .use(bodyparser.json())
          .use(bearerToken())
          .use(event(connection));
          app.listen(port, () => {
            console.log(`Express server listening on port ${port}`);
          });