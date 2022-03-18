const ex = require('express');
const path = require('path')
const app = ex();
app.set('views', path.join(__dirname, 'views'));
app.use(ex.static('public'));
app.set('view engine', 'ejs');
app.get('*', (req, res) => {
  res.status(200).render('home');
});
app.listen(8080);