let koa = require('koa')
let logger = require('koa-logger')
let compress = require('koa-compress');
let route = require('koa-route');
let { home } = require('./controllers/movies');
let app = module.exports = koa();


function * everything(next) {
    console.log(this.method);
    this.body = yield {message: 'Hello World', anotherMessage: 'Whatever'};
    this.set("Access-Control-Allow-Origin", "*");
    this.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
}

app.use(logger('dev'));

app.use(route.get('/*', home));

app.use(compress());

app.listen(5000);

console.log('Listening on port: ' + 5000);
