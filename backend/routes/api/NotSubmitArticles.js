// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load Book model
const NotSubmitArticle = require('../../models/NotSubmitArticle');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('Article route testing!'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
    NotSubmitArticle.find()
    .then(notsubmitarticles => res.json(notsubmitarticles))
    .catch(err => res.status(404).json({ nobooksfound: 'No article found' }));
});


router.post('/type', (req, res) => {
    Article.find({'type':req.body.title})
      .then(articles => res.json(articles))
      .catch(err => res.status(404).json({ nobooksfound: 'No article found' }));
  });

// @route GET api/books/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
    NotSubmitArticle.findById(req.params.id)
    .then(notsubmitarticle => res.json(notsubmitarticle))
    .catch(err => res.status(404).json({ nobookfound: 'No article found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/', (req, res) => {
    NotSubmitArticle.create(req.body)
    .then(notsubmitarticle => res.json({ msg: 'article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.post('/:id', (req, res) => {
    NotSubmitArticle.findByIdAndUpdate(req.params.id, req.body)
    .then(notsubmitarticle => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
    NotSubmitArticle.findByIdAndRemove(req.params.id, req.body)
    .then(notsubmitarticle => res.json({ mgs: 'article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such an article' }));
});

module.exports = router;