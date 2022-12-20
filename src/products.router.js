import ProductsManager from "./productsManager.js";
import { Router } from "express";

const productsManager = new ProductsManager();

const routerProductos = Router();

const productos = productsManager.productos


routerProductos.get('/',(req,res)=>{
   
   //res.render('../views/ejs/inicio.ejs',{productos})
   res.render('../views/pug/inicio.pug',{productos})
   //res.render('../views/layouts/main.handlebars',{productos})
})

routerProductos.post('/',(req,res)=>{
   productos.push(req.body)

   res.redirect('/productos')
})


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
 export default routerProductos