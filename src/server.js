
const app = require('./expressApp').expressApp

const PORT = 8081
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
