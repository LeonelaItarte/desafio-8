import express from 'express';
import routerProductos from './products.router.js';
import handlebars from "express-handlebars"

const app = express();

app.engine("handlebars",handlebars.engine())

//app.set('views', '../views/ejs') este no descomentar porque sino no me anda

//app.set('view engine',  'ejs')

app.set('view engine',  'pug')

//app.set('view engine',  'handlebars')

const PORT=8080;

/*app.use(express.static('public'))*/

app.use(express.json())


app.use(express.urlencoded({extended: true}))

//ruta raiz
app.use('/productos',routerProductos)


app.listen(PORT,()=>{

    console.log('listening on port 8080')
})

