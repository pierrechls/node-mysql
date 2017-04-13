var clc        = require('cli-color')
var format     = require('fmt-obj')
var mysql      = require('mysql')
var settings   = require('../settings/mysql')
var request    = require('../request')

var error  = clc.red.bold
var sucess = clc.green

var connection = mysql.createConnection({
  host     : settings.host,
  user     : settings.user,
  password : settings.password,
  database : settings.database
})

connection.connect()

connection.query(request, function(err, res, fields) {
  if (!err) {
    console.log(sucess('    ----------------------'))
    console.log(sucess('    -       SUCCESS      -'))
    console.log(sucess('    ----------------------'))
    console.log(format(res))
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
