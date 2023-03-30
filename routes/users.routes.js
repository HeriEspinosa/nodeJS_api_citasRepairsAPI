const express = require('express');

const userController = require('./../controllers/users.controller');
const userMiddleware = require('../middlewares/users.middleware');
const router = express.Router();

router
    .route('/')
    .get(userController.findAllUsers)
    .post(
        userMiddleware.validUsers,
        userMiddleware.validExistUserBD,
        userController.createUsers
    );

router
    .route('/:id')
    .get(userMiddleware.validExistUser, userController.findOneUser)
    .patch(
        userMiddleware.validUsers,
        userMiddleware.validExistUser,
        userController.updateUser
    )
    .delete(userMiddleware.validExistUser, userController.deleteUser);

module.exports = router;
