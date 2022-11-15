// this should appear AFTER all of your routes
app.use((req, res) =>
 res.status(404).render('404')
)
