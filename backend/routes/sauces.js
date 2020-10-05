const express = require('express');
const router = express.Router();

const saucesCtrl = require('../controllers/sauces');

router.post('/', saucesCtrl.createSauces);
router.put('/:id', saucesCtrl.modifySauces);
router.delete('/:id', saucesCtrl.deleteSauces);
//router.post('/:id/like', auth, sauceCtrl.likeSauce);

router.get('/', saucesCtrl.getAllSauces);
router.get('/:id', saucesCtrl.getOneSauces);

module.exports = router;