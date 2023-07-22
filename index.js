import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import { createRequire } from 'node:module';

const port = 8000;
const app = express();


                    //  Exercise 1

// app.get('/', (req, res)=>{
//   res.send('<h1>Wellcome to our shop</h1>');
// })
// app.get('/product', (req, res)=>{
//   const title = req.query?.title || 'Iphone';
//   const price = req.query?.price || '$1000';
//   res.send(`<h1>${title}</h1><h2>For just ${price}</h2>`);
// })

// app.listen(port, ()=> {
//   console.log(`Server started on http://localhost:${port}`);
// })


                    //  Exercise 2

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.get('/', (req, res)=>{
//   res.sendFile(path.join(__dirname+'/views/index.html'));
// })
// app.listen(port, ()=>{
//   console.log(`Server started on http://localhost:${port}`);
// })


                    //  Exercise 3

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'pug');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/product', (req, res)=>{
    const title = req.query?.title || 'Iphone';
    const price = req.query?.price || '$1000.00';
    res.render('product', {product_title: title, product_price: price});
})

app.listen(port, ()=>{
  console.log(`Server started on http://localhost:${port}`);
})


                    //  Exercise 4

const require = createRequire(import.meta.url);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./swagger.json')));