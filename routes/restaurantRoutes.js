const express = require('express');
const { addRestaurant, listRestaurants, updateRestaurant, deleteRestaurant } = require('../controllers/restaurantController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, addRestaurant);
router.get('/', authenticateToken, listRestaurants);
router.put('/:id', authenticateToken, updateRestaurant);
router.delete('/:id', authenticateToken, deleteRestaurant);

module.exports = router;