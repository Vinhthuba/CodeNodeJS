const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/process-contact', (req, res) => {
    console.log(`received contact from ${req.body.name}
   <${req.body.email}>`)
    res.redirect(303, '10-thank-you')
   })
   