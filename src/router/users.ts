import express from 'express'
const router = express.Router()

router.get('/currentuser', (req, res) => {
    res.send("Hi, there!")
})

module.exports = router
