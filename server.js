import express from 'express';
import taskRouter from "./src/routers/taskRouter.js";

const app = express();
const Port = 8000;
// middlewares

//we convert the thing to json 
app.use(express.json())


app.use('/api/v1/task', taskRouter)

//This handels the default api point
app.use('/', (req, res) => {
    res.json({
        status: "success",//either success or error
        message: 'You have reached not to do api',
    });
})

//this is to handel the error
app.use((error, req, res, next) => {
    res.json({
        status: 'ERROR',
        message: error.message
    });
    //writin in file system or database or send warning text message to devops team
})

app.listen(Port, (error) => {
    error && console.log(error)
    console.log(`Server running at http://localhost:${Port}`)
})