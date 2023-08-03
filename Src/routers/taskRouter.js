import express from "express"
const router = express.Router();

router.get('/', (req, res, next) => {

    try {
        res.json({
            status: "success",//either success or error
            message: 'return from get method',
        })
    } catch (error) {
        error.status = error.status || 500;
        next(error)
    }
})

router.post('/', (req, res) => {
    try {
        res.json({
            status: "success",//either success or error
            message: 'return from post method',
        })
    } catch (error) {
        console.log('Message :', error)
    }
});

export default router; 