const User = require('./../models/users.model');

exports.findAllUsers = async (req, res) => {
    const users = await User.findAll({
        where: {
            status: 'available',
        },
    });

    res.status(200).json({
        status: 'success',
        message: 'The query has been done successfully',
        results: users.length,
        users,
    });
};

exports.createUsers = async (req, res) => {
    const { name, email, password, role } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        role,
    });

    res.status(201).json({
        status: 'success',
        message: 'You have create a user',
        user,
    });
};

exports.updateUser = async (req, res) => {
    const { user } = req;
    const { name, email, password, role, status } = req.body;

    await user.update({
        name,
        email,
        password,
        role,
        status,
    });

    res.status(200).json({
        status: 'success',
        message: 'The user has been updated',
    });
};

exports.deleteUser = async (req, res) => {
    const { user } = req;

    await user.update({
        status: 'disabled',
    });

    res.status(200).json({
        status: 'success',
        message: 'The user has been deleted',
    });
};

exports.findOneUser = async (req, res) => {
    const { id } = req.params;

    const user = await User.findOne({
        where: {
            id,
            status: 'available',
        },
    });

    res.status(200).json({
        status: 'success',
        message: 'The query has been done successfully',
        user,
    });
};
