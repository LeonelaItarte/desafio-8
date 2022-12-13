import express from 'express';
import routerProductos from './products.router.js';

const app = express();

const PORT=8080;

app.use(express.static('public'))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

//ruta raiz
app.use('/api/productos',routerProductos)


app.listen(PORT,()=>{

    console.log('listening on port 8080')
})

