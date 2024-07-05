const Restaurant = require('../models/Restaurant');

// Add Restaurant
exports.addRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;
  try {
    const restaurant = await Restaurant.create({ name, location, price_range });
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add restaurant' });
  }
};

// List Restaurants
exports.listRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

// Update Restaurant
exports.updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { name, location, price_range } = req.body;
  try {
    const restaurant = await Restaurant.findByPk(id);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    restaurant.name = name;
    restaurant.location = location;
    restaurant.price_range = price_range;
    await restaurant.save();
    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update restaurant' });
  }
};

// Delete Restaurant
exports.deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findByPk(id);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    await restaurant.destroy();
    res.status(200).json({ message: 'Restaurant deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete restaurant' });
  }
};
