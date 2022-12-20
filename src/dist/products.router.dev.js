"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _productsManager = _interopRequireDefault(require("./productsManager.js"));

var _express = require("express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productsManager = new _productsManager["default"]();
var routerProductos = (0, _express.Router)();
var productos = productsManager.productos;
routerProductos.get('/', function (req, res) {
  //res.render('../views/ejs/inicio.ejs',{productos})
  res.render('../views/pug/inicio.pug', {
    productos: productos
  }); //res.render('../views/layouts/main.handlebars',{productos})
});
routerProductos.post('/', function (req, res) {
  productos.push(req.body);
  res.redirect('/productos');
});
/*routerProductos.get('/',(req,res)=>{
   
    res.send(productsManager.listarAll())
 })

routerProductos.get('/:id',(req,res)=>{
  
  let producto = productsManager.listar(req.params.id)
   
  if(producto.length === 0){
    res.status(400).send({error:'error producto no encontrado'})
  }else{
    res.send(producto)
  }

 })

 routerProductos.post('/',(req,res)=>{

    let producto = req.body

    producto.precio = parseInt(producto.precio)
   
    const productoResponse =  productsManager.guardar(producto)

    res.send(productoResponse)

 })

 routerProductos.put('/:id',(req,res)=>{

    let id = req.params.id

    let prod= req.body
   
    res.send(productsManager.actualizar(prod,id))


 })

 routerProductos.delete('/:id',(req,res)=>{

    let id = req.params.id

    res.send(productsManager.borrar(id))


 })*/

var _default = routerProductos;
exports["default"] = _default;