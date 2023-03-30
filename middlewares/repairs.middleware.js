const Repair = require('../models/repairs.model');

exports.validRepair = (req, res, next) => {
    const { date, userId } = req.body;

    if (!date) {
        return res.status(400).json({
            status: 'error',
            message: 'The date is required',
        });
    }
    if (!userId) {
        return res.status(400).json({
            status: 'error',
            message: 'The userId is required',
        });
    }

    next();
};

exports.validExistRepair = async (req, res, next) => {
    const { id } = req.params;

    const repair = await Repair.findOne({
        where: {
            id,
            status: 'pending',
        },
    });

    if (!repair) {
        return res.status(404).json({
            status: 'error',
            message: `Repair with id: ${id} not found`,
        });
    }

    req.repair = repair;
    next();
};

exports.validCancelledRepair = async (req, res, next) => {
    const { id } = req.body;

    const repair = await Repair.findOne({
        where: {
            id,
            status: 'completed',
        },
    });

    if (repair) {
        return res.status(400).json({
            status: 'error',
            message: `Oops!, the order with id: ${id} cannot be deleted, this order is already completed`,
        });
    }
};
