//defined routes
const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes.js');
const homeRoutes = require('./homeroutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;