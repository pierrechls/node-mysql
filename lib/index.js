var mysql      = require('mysql')
var settings   = require('../settings/mysql')
var request    = require('../request')

var connection = mysql.createConnection({
  host     : settings.host,
  user     : settings.user,
  password : settings.password,
  database : settings.database
})

connection.connect()

connection.query(request, function(err, res, fields) {
  if (!err) {
    console.log(res)
  } else {
    console.log('error: ', err)
  }
})

connection.end()
