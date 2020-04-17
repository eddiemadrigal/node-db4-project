
const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
});

router.get('/:id', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(ingredients => {
      res.json(ingredients);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get ingredients' })
    })
});

module.exports = router;