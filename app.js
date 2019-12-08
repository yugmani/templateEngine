const path = require('path')
const express = require ('express')

const app = express()


const pathLocal = path.join(__dirname, 'templates')

app.use(express.static(pathLocal))

app.set('view engine', 'hbs')

engineer = {
    name: "Jasmine",
    age: 15
}



app.get('', (req, res) =>{

    res.render('index.hbs', {
        title:"manager",
        name:"Catherine"
    })
})

app.get('/help', (req, res)=>{

    res.send(engineer)
})

app.get('/weather', (req, res)=>{
    res.send('Your Weatehr')
})


app.listen(3000, ()=>{
    console.log('server is listening on port:3000.')
})