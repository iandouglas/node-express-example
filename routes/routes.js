const express = require('express');

const router = express.Router()

module.exports = router;

// GET ALL API
router.get('/getAll', (req , res) => {
    console.log('getAll')
    res.send('getAll')
})

// GET By ID API
router.get('/getOne/:id', (req , res) => {
    console.log(`getOne ${req.params.id}`)
    res.send(`getOne ${req.params.id}`)
})

// POST API
router.post('/post', (req , res) => {
    console.log('POST Method')
    res.send('POST Method')
})

// PUT API
router.put('/put', (req , res) => {
    console.log('PUT METHOD')
    res.send('PUT METHOD')
})

//DELETE API
router.delete('/delete', (req , res) => {
    console.log('DELETE Method')
    res.send('DELETE Method')
})
