"use strict";

var _express = _interopRequireDefault(require("express"));

var _productsRouter = _interopRequireDefault(require("./products.router.js"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.engine("handlebars", _expressHandlebars["default"].engine()); //app.set('view engine',  'ejs')
//app.set('views', '../views/ejs') este no descomentar porque sino no me anda

app.set('view engine', 'pug'); //app.set('view engine',  'handlebars')

var PORT = 8080;
/*app.use(express.static('public'))*/

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
})); //ruta raiz

app.use('/productos', _productsRouter["default"]);
app.listen(PORT, function () {
  console.log('listening on port 8080');
});