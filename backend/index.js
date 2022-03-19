require('log-timestamp')

const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

const depositables = {
  can: {
    value: 2,
    processingTime: 500
  },
  bottle: {
    value: 3,
    processingTime: 1000
  }
}

app.use(cors())
app.use(express.json())

app.get('/depositables', (req, res) => {
  console.log(`${req.hostname} requested depositables`)

  res.send(depositables)
})

app.post('/checkout', (req, res) => {
  const voucherTimestamp = new Date(req.body.timestamp).toISOString()

  console.log(`Voucher was requested @ ${voucherTimestamp} with the following deposits:`)
  console.log(req.body.deposited.map(deposit => {
    const dateTime = new Date(deposit[1]).toISOString()

    return `${deposit[0]} @ ${dateTime}`
  }))

  res.status(201).send()
})

app.listen(port, () => {
  console.log(`deposit-return-backend listening on port ${port}`)
})
