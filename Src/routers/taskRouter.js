import express from "express"
import { insertTask } from "../model/task/TaskModel.js";
const router = express.Router();

let fakeDB = [
    { _id: 1, task: 'watching Tv', hr: 30 },
    { _id: 2, task: 'Shopping', hr: 20 },
    { _id: 3, task: 'playing ', hr: 10 }
];

router.get('/:_id?', (req, res, next) => {
    try {
        //query the database and get all the task as url 
        const { _id } = req.params;
        let data = fakeDB;

        if (_id) {
            data = fakeDB.filter((item) => item._id === +_id)
        }
        res.json({
            status: "success",//either success or error
            message: 'return from get method',
            data,
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

router.delete('/:_id?', (req, res, next) => {
    try {
        //query the database and delete the based on id passed on body from rest 
        const { _id } = req.params;

        //db query to delete data 
        const filteredArg = fakeDB.filter(item => item?._id !== +_id)
        fakeDB = filteredArg
        res.json({
            status: "success",//either success or error
            message: 'return from delete method',
        })
    } catch (error) {
        next(error)
    }
});

export default router; 