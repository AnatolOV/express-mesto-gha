const router = require('express').Router();

router.all('*', (_req, res) => {
  res.status(404).send({ message: 'Такой страницы не существует!' });
});

module.exports = router;
