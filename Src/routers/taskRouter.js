import express from "express"
const router = express.Router();

let fakeDB = [
    { _id: 1, task: 'watching Tv', hr: 30 },
    { _id: 2, task: 'Shopping', hr: 20 },
    { _id: 3, task: 'playing ', hr: 10 }
];

router.get('/:_id?', (req, res, next) => {
    try {
        //query the database and get all the task
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

router.post('/', (req, res, next) => {
    try {
        console.log(req.body);
        //push query to data
        fakeDB.push(req.body)
        res.json({
            status: "success",//either success or error
            message: 'return from post method',
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

router.delete('/', (req, res, next) => {
    try {
        const _id = req.body;

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