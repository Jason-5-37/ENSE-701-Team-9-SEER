// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const Manager = require('../../models/manager');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Article route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    Manager.find()
    .then(managers => res.json(managers))
    .catch(err => res.status(404).json({ nobooksfound: 'No article found' }));
});

// @route GET api/books/:id
// @description Get single book by id
// @access Public
/*
router.get('/:id', (req, res) => {
    Manager.findById(req.params.id)
    .then(manager => res.json(manager))
    .catch(err => res.status(404).json({ nobookfound: 'No article found' }));
});
*/

router.post('/yoyoyo', (req, res) => {
    Manager.find({'email':req.body.email})
    .then(manager => res.json(manager))
    .catch(err => res.status(404).json({ nobookfound: 'asd' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    Manager.create(req.body)
    .then(manager => res.json({ msg: 'article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.post('/:id', (req, res) => {
    Manager.findByIdAndUpdate(req.params.id, req.body)
    .then(manager => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    Manager.findByIdAndRemove(req.params.id, req.body)
    .then(manager => res.json({ mgs: 'article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such an article' }));
});

module.exports = router;