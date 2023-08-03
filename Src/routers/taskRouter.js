import express from "express"
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        status: "success",//either success or error
        message: 'return from get method',
    })
})
router.post('/', (req, res) => {
    res.json({
        status: "success",//either success or error
        message: 'return from post method',
    })
})

export default router; 