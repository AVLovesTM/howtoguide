var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.use(express.static('public'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3001);

app.get('/', function(req, res, next){
	res.render('howTo');
});

app.get('/1_general', function(req, res, next){
	res.render('1_general');
});

app.get('/2_applicationObj', function(req, res, next){
	res.render('2_applicationObj');
});

app.get('/3_requestObj', function(req, res, next){
	res.render('3_requestObj');
});

app.get('/4_responseObj', function(req, res, next){
	res.render('4_responseObj');
});



app.use(function(req, res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('plain/text');
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log("Express started on http://localhost:" + app.get('port') + ", press Ctrl-C to terminate");
});
