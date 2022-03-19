const ex = require('express');
const path = require('path');
const videos = require('./public/videos.json');
const app = ex();
app.set('views', path.join(__dirname, 'views'));
app.use(ex.static('public'));
app.set('view engine', 'ejs');
app.get('*', (req, res) => {
  const video = videos[Math.floor(Math.random()*videos.length)];
  res.status(200).render('home', { video });
});
app.listen(process.env.PORT || 8080);