const express = require('express');
const loginRoutes = require('./login.routes');
const registerRoutes = require('./register.routes');
const productRoutes = require('./products.routes');
const saleRoutes = require('./sales.routes');
const adminRoutes = require('./admin.routes');

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/register', registerRoutes);
routes.use('/products', productRoutes);
routes.use('/sales', saleRoutes);
routes.use('/admin', adminRoutes);

module.exports = routes;