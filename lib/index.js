var clc        = require('cli-color')
var format     = require('fmt-obj')
var mysql      = require('mysql')

require('dotenv').config()

var error  = clc.red.bold
var sucess = clc.green

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_NAME
})

connection.query(process.env.REQUEST, (err, res, fields) => {
  if (!err) {
    console.log(sucess('    ----------------------'))
    console.log(sucess('    -       SUCCESS      -'))
    console.log(sucess('    ----------------------'))
    console.log()
    res.forEach( (el) => {
      console.log(clc.green('{'))
      console.log(format(el))
      console.log()
      console.log(clc.green('}'))
    })
    console.log()
  } else {
    console.log(error('    ----------------------'))
    console.log(error('    -        ERROR       -'))
    console.log(error('    ----------------------'))
    console.log(format(err))
    console.log()
  }
})

connection.end()
