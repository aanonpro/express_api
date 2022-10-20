const express = require('express');
const { getNote, createNote, deleteNote, updateNote } = require('../controllers/noteController');
const auth = require('../middleware/auth');
const noteRouter = express.Router();

noteRouter.get('/', auth, getNote);

noteRouter.post('/', auth, createNote);

noteRouter.delete('/:id', auth, deleteNote);

noteRouter.put('/:id', auth, updateNote);

noteRouter.get('/login', function(req, res, next) {
    res.render('auth/signin');
})

module.exports = noteRouter;