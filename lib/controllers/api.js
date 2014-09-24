'use strict';

var mongoose = require('mongoose'),
    Article = mongoose.model('article');

/**
 * Get awesome articles
 */
exports.articles = function(req, res) {
	return Article.find(function (err, articles) {
		if (!err) {
			return res.json(articles);
		} else {
			return res.send(err);
		}
	});
};

exports.article = function(req, res) {
	var articleId = req.params.id;
	Article.findById(articleId, function (err, article) {
		if(err) return next(err);
		if(!article) return res.send(404);
		res.send({article: article});
	});
};