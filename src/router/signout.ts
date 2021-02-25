import express from 'express'
const router = express.Router()

router.get('/signout', (req, res) => {
  res.send('signout endpoint')
})

export default router
