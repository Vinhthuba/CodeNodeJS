const express  = require('express')
const app = express()

app.disable('x-powered-by')

app.get('*',(req,res)=>{
    res.send(`Open your dev tools and examine your headers ; `+ 
    `ou'll notice threer is no x-powered-by header`)
})

 
const port  = process.env.PORT || 3000 
app.listen(port, ()=> console.log( `\nnavigate to http:\\localhost:${port}/headers\n`))
