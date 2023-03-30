const express = require('express');

const repairController = require('../controllers/repairs.controller');
const repairMiddleware = require('../middlewares/repairs.middleware');

const router = express.Router();

router
    .route('/')
    .get(repairController.findAllRepairs)
    .post(repairMiddleware.validRepair, repairController.createRepair);

router
    .route('/:id')
    .get(repairMiddleware.validExistRepair, repairController.findOneRepair)
    .patch(
        repairMiddleware.validRepair,
        repairMiddleware.validExistRepair,
        repairController.updateRepair
    )
    .delete(repairMiddleware.validExistRepair, repairController.deleteRepair);

module.exports = router;
