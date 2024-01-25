import express from 'express'

const app = express()
const teste = {
    name: "Reinaldo",
    email: "Gamersolitavi4l@gmail.com",
    phone:"4899123133"
}
app.get('/users', (req, res) => {
return res.json(teste)
}) 
app.listen(3333, () => {
    console.log("hi HTTP SERVER")
})