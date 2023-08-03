import express from 'express';
import taskRouter from "./Src/routers/taskRouter.js";

const app = express();
const Port = 8000;

app.use('/api/v1/task', taskRouter)

app.use('/', (req, res) => {
    res.json({
        status: "success",//either success or error
        message: 'You have reached not to do api',
    });
})

app.use((error, req, res, next) => {
    // error.status = error.status || 404;
    res.json({
        status: 'error',
        message: error.message
    });
    //writin in file system or database or send warning text message to devops team
})

app.listen(Port, (error) => {
    error && console.log(error)
    console.log(`Server running at http://localhost:${Port}`)
})