import express from 'express'

const PORT = 3000
const app = express()

app.get('/', (req, res)=>{
    res.send("Server working...")
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})