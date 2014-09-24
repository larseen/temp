'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * article Schema
 */
var articleSchema = new Schema({
  meta: {
	date: { type: Date, default: Date.now},
	magazine: {type: Schema.ObjectId, ref: 'magazine'},
	price: Number,
	author: {type: Schema.ObjectId, ref: 'author'}
  },
  content: [],
  source: {}
});

mongoose.model('article', articleSchema);
