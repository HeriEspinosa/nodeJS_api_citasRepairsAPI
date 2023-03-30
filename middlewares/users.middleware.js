const User = require('../models/users.model');

exports.validUsers = (req, res, next) => {
    const { name, email, password, role } = req.body;

    if (!name) {
        return res.status(400).json({
            status: 'error',
            message: 'The name is required',
        });
    }
    if (!email) {
        return res.status(400).json({
            status: 'error',
            message: 'The email is required',
        });
    }
    if (!password) {
        return res.status(400).json({
            status: 'error',
            message: 'The password is required',
        });
    }
    if (!role) {
        return res.status(400).json({
            status: 'error',
            message: 'The role is required',
        });
    }

    next();
};

exports.validExistUserBD = async (req, res, next) => {
    const { email } = req.body;

    const user = await User.findOne({
        where: {
            email,
        },
    });

    if (user) {
        return res.status(400).json({
            status: 'error',
            message: `Oops!, email: ${email} already exists`,
        });
    }

    next();
};

exports.validExistUser = async (req, res, next) => {
    const { id } = req.params;

    const user = await User.findOne({
        where: {
            id,
            status: 'available',
        },
    });

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: `User with id: ${id} not found`,
        });
    }

    req.user = user;
    next();
};
