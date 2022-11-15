// the layout file views/layouts/custom.handlebars will be
used
app.get('/custom-layout', (req, res) =>
 res.render('custom-layout', { layout: 'custom' })
)