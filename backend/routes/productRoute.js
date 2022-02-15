const express = require('express');
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,  authorizeRoles("admin"), createProduct);
router.route("/product/:id").put(isAuthenticatedUser,  authorizeRoles("user"), updateProduct).delete(isAuthenticatedUser,  authorizeRoles("user"), deleteProduct).get(getProductDetails);


module.exports = router;