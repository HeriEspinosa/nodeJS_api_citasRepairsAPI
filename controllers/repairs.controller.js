const Repair = require('./../models/repairs.model');

exports.findAllRepairs = async (req, res) => {
    const repairs = await Repair.findAll({
        where: {
            status: 'pending',
        },
    });

    res.status(200).json({
        status: 'success',
        message: 'The query has been done successfully',
        repairs,
    });
};

exports.createRepair = async (req, res) => {
    const { date, userId } = req.body;

    const repair = await Repair.create({
        date,
        userId,
    });

    res.status(201).json({
        status: 'success',
        message: 'ticket create successfully',
        repair,
    });
};

exports.updateRepair = async (req, res) => {
    const { repair } = req;
    const { date, status, userId } = req.body;

    await repair.update({
        date,
        status,
        userId,
    });

    res.status(200).json({
        status: 'success',
        message: 'The repair has been updated',
    });
};

exports.deleteRepair = async (req, res) => {
    const { repair } = req;

    await repair.update({
        status: 'cancelled',
    });

    res.status(200).json({
        status: 'success',
        message: 'The Repair has been deleted',
    });
};

exports.findOneRepair = async (req, res) => {
    const { repair } = req;

    res.status(200).json({
        status: 'success',
        message: 'The query has been done successfully',
        repair,
    });
};
