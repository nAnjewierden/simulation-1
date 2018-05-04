const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()
const cc = require('./controller')
const app = express();

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then((dbInstance) => {app.set('db', dbInstance)})

app.get()
app.post()
app.put()
app.delete()
