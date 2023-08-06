import express from "express"
import { deleteTask, getSingleTasks, getTasks, insertTask } from "../model/task/TaskModel.js";
const router = express.Router();


router.get('/:_id?', async (req, res, next) => {
    try {
        const { _id } = req.params;
        const result = _id ? await getSingleTasks(_id) : await getTasks();
        res.json({
            status: "success",//either success or error
            message: 'return from get method',
            result,
        })
    } catch (error) {
        next(error)
    }
})

router.post('/', async (req, res, next) => {
    try {
        // const result = await insertTask(req.body);
        // console.log(result)
        const result = await insertTask(req.body);
        console.log(result)
        res.json({
            status: "success",//either success or error
            message: 'todo',
            result,
        })
    } catch (error) {
        next(error)
    }
});

router.patch('/', (req, res, next) => {
    try {
        res.json({
            status: "success",//either success or error
            message: 'return from patch method',
        })
    } catch (error) {
        next(error)
    }
});

router.delete('/:_id?', async (req, res, next) => {
    const { _id } = req.params;
    const result = await deleteTask(_id);

    try {
        res.json({
            status: "success",//either success or error
            message: 'return from delete method',
            result
        })
    } catch (error) {
        next(error)
    }
});

export default router; 