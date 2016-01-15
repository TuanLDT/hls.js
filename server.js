var 
	express = require('express'),
	app = express();

app.use(express.static(__dirname));
app.get('/', function(req, res) {
	res.sendfile('demo/index.html');
});

var port = process.argv[2] || 3000;
app.listen(port);
console.log('Server started port ', port);