// this should appear AFTER all of your routes
// note that even if you don't need the "next" function, it
// included for Express to recognize this as an error handler
app.use((err, req, res, next) => {
 console.error('** SERVER ERROR: ' + err.message)
 res.status(500).render('08-error',
 { message: "you shouldn't have clicked that!" })
})
