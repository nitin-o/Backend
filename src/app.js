import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('Hello W you  nana!')
})

export default app;
