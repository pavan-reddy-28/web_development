require('./foo.js');
    foo();

var bar = require('./bar.js');
    bar();

var FOO = require('./first.js').fiz;
    FOO();

var buz = require('./buz.js');
    buz.log();

var baz = require('./baz.js').Baz;
    baz.log();

var Doo = require('./doo.js');
var doo = new Doo();
    doo.log();

var Qux = require('./quix.js').Qux;
var qux = new Qux();
qux.log();
