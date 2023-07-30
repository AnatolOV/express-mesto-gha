const router = require('express').Router();

const userRouter = require('./users');
const cardsRouter = require('./cards');
const { auth } = require('../middlewares/auth');
const { login, createUser } = require('../controlers/users');

const validation = require('../middlewares/validation');

// const ERROR_404_NOTFOUND = 404;
// Мы больше не отправляем ответ с ошибкой напрямую, вместо этого нужно направлять соответсвующий
// экземпляр класса в централизованный обработчик ошибок

router.post('/signin', validation.login, login);
router.post('/signup', validation.createUser, createUser);

router.use('/cards', auth, cardsRouter);
router.use('/users', auth, userRouter);

// router.use('/', (_req, res) => {
//   res
//     .status(ERROR_404_NOTFOUND)
//     .send({ message: 'Данная страница не найдена' });
// });
router.use('*', require('./page404'));

module.exports = router;
