import express from 'express';
import taskRouter from "./src/routers/taskRouter.js";
import { dbConnect } from './src/config/dbConfig.js';
import helmet from "helmet";
import cors from 'cors'
import path from "path"
import "dotenv/config"

const app = express();
const Port = 8000;
// middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

//db connect 
dbConnect();

app.use('/api/v1/task', taskRouter)

//static content serve
const __dirname = path.resolve()
app.use(express.static(path.join(__dirname, "/Not to do frontend/build")));

//This handels the default api point
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirName, "/Not to do frontend/build/index.html"))
})

//this is to handel the error
app.use((error, req, res, next) => {
    res.json({
        status: 'ERROR',
        message: error.message,
    });
})

app.listen(Port, (error) => {
    error && console.log(error)
    console.log(`Server running at http://localhost:${Port}`)
})