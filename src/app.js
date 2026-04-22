import express from "express"

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World..... nitinn nana!')
})

export default app;
