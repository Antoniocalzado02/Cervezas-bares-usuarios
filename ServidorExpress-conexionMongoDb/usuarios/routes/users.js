const express = require('express')
const router = express.Router()

const {getUser, addUser, deleteUser, editUser, getUsers} = require('../controllers/users')

router.get('/', getUsers)
router.get('/:id', getUser)
router.post('/', addUser)
router.delete('/:id', deleteUser)
router.put('/:id', editUser)

module.exports = router