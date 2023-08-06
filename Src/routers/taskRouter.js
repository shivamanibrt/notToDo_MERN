import express from "express"
import { deleteManyTask, deleteTask, getSingleTasks, getTasks, insertTask, updateTask } from "../model/task/TaskModel.js";
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
        const result = await insertTask(req.body);
        result?._id ? res.json({
            status: "success",//either success or error
            message: 'Task added',
            result,
        }) : (
            res.json({
                status: "success",//either success or error
                message: 'Task added',
                result,
            })
        )
    } catch (error) {
        next(error)
    }
});

router.patch('/', async (req, res, next) => {
    try {
        const { _id, type } = req.body;
        const result = await updateTask(_id, type)
        res.json({
            status: "success",//either success or error
            message: 'return from patch method',
            result
        })
    } catch (error) {
        next(error)
    }
});

router.delete('/:_id?', async (req, res, next) => {
    const { ids } = req.body;
    const result = await deleteManyTask(ids);
    console.log(result)
    try {
        res.json({
            status: "success",//either success or error
            message: 'The selected item has been deleted',
            result
        })
    } catch (error) {
        next(error)
    }
});

export default router; 