const express = require('express')
const { Pool } = require('pg')
const app = express()

// Connect to PostgreSQL using a local variable
const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'postgres',
  port: 5432
})

// Test the connection to the database
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

// Your Express.js routes and middleware go here

const port = 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
