import express from 'express'

const app = express()

app.listen(3000, () => {
  console.log(`${process.env.PROJECT_NAME} API running at port 3000!`)
})
