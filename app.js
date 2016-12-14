let koa = require('koa')
let logger = require('koa-logger')
let compress = require('koa-compress');
let route = require('koa-route');

let app = module.exports = koa();

console.log(app);

function * everything(next) {
    console.log(this.method);
    this.set("Access-Control-Allow-Origin", "*");
    this.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    this.body = yield {message: 'Hello World', anotherMessge: 'Whatever'};
}

app.use(logger('dev'));

app.use(route.get('/*', everything));

app.use(compress());

app.listen(5000);

console.log('Listening on port: ' + 5000);
