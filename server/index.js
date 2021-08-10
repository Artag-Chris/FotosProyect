
import express from 'express'; //se usa para crear servidor local
//import bodyParser from 'body-parser';//ya no deberia usarse, en su lugar solo deberia usarse express que posee esas mismas funciones
import mongoose from 'mongoose';//se usa para conectar a mongo db
import cors from 'cors';//para funcionar en multi origen

import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true })) //se usa extended true por que ya no se deberia usar bodyparser
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://christianHenao:vakakuerda88@cluster0.99kao.mongodb.net/proyect';
const PORT = process.env.PORT|| 5000;//si no se usa variable de entorno su puerto inicial es el 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //si no se conecta a la base de datos mongo no abre el local host
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

app.get("/",(req,res)=>{
  res.send("hello from the api chris hermoso")
})
app.use('/posts', postRoutes);

mongoose.set('useFindAndModify', false); 