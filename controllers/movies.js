module.exports = {
    home: home
};

let monk = require('monk');
let wrap = require('co-monk');
let co = require('co');
var mockData = require('../mockData.json');
let db = monk('localhost/movies');
let bodyparser = require('co-body');
let data = require('../mockData.json');

let movies = wrap(db.get('movies'));

co(function * () {
    var films = yield movies.find({});
});

function * home(next) {
  if ('GET' != this.method) return yield next;
  this.body = yield movies.find({});
};