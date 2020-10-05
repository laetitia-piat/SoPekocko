const sauces = require('../models/sauces');

exports.createSauces = (req, res, next) => {
  const sauces = new Sauces({
  	userId: req.body.userId
  });
  Sauces.save()
  .then(() => {
      res.status(201).json({message: 'Sauce sauvegardée!'});
    })
  .catch((error) => {
    	res.status(400).json({error: error});
    }
  );
};

exports.modifySauces = (req, res, next) => {
  const sauces = new Sauces({
    _id: req.params.id,
    userId: req.body.userId
  });
  Sauces.updateOne({_id: req.params.id}, sauces)
  .then(() => {
      res.status(201).json({message: 'Sauce updated successfully!'});
    })
  .catch(
    (error) => {
      res.status(400).json({error: error});
    }
  );
};

exports.deleteSauces = (req, res, next) => {
  Sauces.deleteOne({_id: req.params.id}).then(() => {
      res.status(200).json({message: 'Sauce effacée!'});
    })
  .catch((error) => {
      res.status(400).json({error: error});
    }
  );
};

exports.getAllSauces = (req, res, next) => {
  Sauces.find()
  .then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(400).json({error: error}))
};

exports.getOneSauces = (req, res, next) => {
  Sauces.findOne({_id: req.params.id})
  .then(sauces => res.status(200).json(sauces))
  .catch(error => res.status(404).json({error: error}))
};