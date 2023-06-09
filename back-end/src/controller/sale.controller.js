const saleService = require('../service/sale.service');

const getAllSeller = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const allUser = await saleService.getAllSellers(token);
    return res.status(200).json(allUser);
  } catch (error) {
    return next(error);
  }
};

// obj do body = {
//     userId,
//     sellerId,
//     products: lista de produtos,
//     address: {
//         street,
//         number,
//     }, 
//     totalPrice,
// };

const createSale = async (req, res, next) => {
  const token = req.headers.authorization;
  const sale = req.body;
  try {
    const saleData = await saleService.createSale(sale, token);
    return res.status(201).json(saleData);
  } catch (err) {
    return next(err);
  }
};

const getSaleById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const saleById = await saleService.getSaleById(Number(id));
    return res.status(200).json(saleById);
  } catch (err) {
    return next(err);
  }
};

const getUserOrders = async (req, res, next) => {
  const { id } = req.params;
  try {
    const userOrders = await saleService.getUserOrders(Number(id));
    return res.status(200).json(userOrders);
  } catch (err) {
    return next(err);
  }
};

const getSellerOrders = async (req, res, next) => {
  const { id } = req.params;
  try {
    const sellerOrders = await saleService.getSellerOrders(Number(id));
    return res.status(200).json(sellerOrders);
  } catch (err) {
    return next(err);
  }
};

const sellerChangeStatus = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const { status } = req.body;
  try {
    await saleService.sellerOrderStatus({ id, status }, token);
    return res.status(200).json();
  } catch (err) {
    return next(err);
  }
};

const customerChangeStatus = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  try {
    await saleService.userOrderStatus(id, token);
    return res.status(200).json();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAllSeller,
  createSale,
  getSaleById,
  getUserOrders,
  getSellerOrders,
  sellerChangeStatus,
  customerChangeStatus,
};