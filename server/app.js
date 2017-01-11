const express			= require('express');
const path				= require('path');
const logger			= require('morgan');
const methodOverride = require('method-override');
const bodyParser		= require('body-parser');
const statics			= require('serve-static');

const log = require('./modules/log')(module);

const app = express();

app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(statics(path.join(__dirname, '../dist/')));

app.listen(1337, () => {
	log.info('Express server listening on port 1337');
});

app.use((req, res) => {
	res.status(404);
	log.debug('Not found URL: %s', req.url);
	res.send({error: 'Not found'});
	return false;
});

app.use((err, req, res) => {
	res.status(err.status || 500);
	log.error('Internal error(%d): %s', res.statusCode, err.message);
	res.send({error: err.message});
	return false;
});

app.get('/ErrorExample', (req, res, next) => {
	next(new Error('Random error!'));
});

app.get('/api', (req, res) => {
	res.send('API is running');
});

app.get('/api/heroes', (req, res) => {
	res.send(JSON.stringify([
		{id: 11, name: 'Mr. Nice'},
		{id: 12, name: 'Narco'},
		{id: 13, name: 'Bombasto'},
		{id: 14, name: 'Celeritas'},
		{id: 15, name: 'Magneta'},
		{id: 16, name: 'RubberMan'},
		{id: 17, name: 'Dynama'},
		{id: 18, name: 'Dr IQ'},
		{id: 19, name: 'Magma'},
		{id: 20, name: 'Tornado'}
	]));
});

app.all('/*', function(req, res) {
	res.sendfile('index.html', {root: path.resolve(__dirname, '../dist/')});
});
