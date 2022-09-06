import  express  from "express";
import  cors  from "cors";
//importamos BD
import db from "./database/db.js";
//importamos enrutador
import blogRoutes from "./routes/routes.js";

const app = express()

app.use( cors() )
app.use ( express.json() )
app.use('/', blogRoutes)

try {
    db.authenticate()
    console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log( `El error de conexion es:${error} ` )
}


/*app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})*/

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})