import express from "express"
import cors from "cors"
import  usersRouter from "./Routers/UserRouter";
import dotenv from "dotenv"
import morgan from "morgan"

const app = express();
dotenv.config();
const Port = process.env.PORT;

//Middleares 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.listen(Port, () => {
    console.clear();
    console.log(`Server on port ${Port}`);
});

//ruta de prueba
app.get('/', (req, res) => {
    return res.status(200).send('hello world');
});

//rutas 
app.use('/users',usersRouter);